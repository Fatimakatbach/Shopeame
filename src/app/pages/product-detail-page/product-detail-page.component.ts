import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  @Input() estrellas:any = []
  product!:any
  id!:number
  userRegisterForm!:FormGroup



  constructor(private ServiceService:ServiceService,private activatedRoute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }

  nuevoProducto: any = this.product


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id =Number(params.get('id'))
      this.ServiceService.getProductByid(this.id).subscribe((data:any) => {this.product =data})
    })
    this.userRegisterForm=this.formBuilder.group({

      name:["",[Validators.required,Validators.minLength(4)]],
      price:["",[Validators.required]],
      description:["",[Validators.required]],
      stars:["",[Validators.required]],
      image:["",[Validators.required]],

    })


  }
  submit(){

    this.nuevoProducto = this.userRegisterForm.value
    this.nuevoProducto.id = this.id
    console.log(this.nuevoProducto)
    this.ServiceService.putProduct(this.nuevoProducto).subscribe()
    this.userRegisterForm.reset()
    window.location.reload()

  }

  eliminar(){
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id =Number(params.get('id'))
      this.ServiceService.delete(this.id).subscribe((data:any) => {this.product =data})
      this.router.navigate(['/products'])
    })
  }
}
