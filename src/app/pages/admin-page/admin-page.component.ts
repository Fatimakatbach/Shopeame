import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  userRegisterForm!:FormGroup

  constructor(private formBuilder: FormBuilder,private ServiceService:ServiceService,private router:Router) { }

  nuevoProducto!: any

  ngOnInit(): void {
    this.userRegisterForm=this.formBuilder.group({

      name:["",[Validators.required,Validators.minLength(4)]],
      price:["",[Validators.required,Validators.minLength(1)]],
      description:["",[Validators.required,Validators.minLength(4)]],
      stars:["",[Validators.required,Validators.minLength(1)]],
      image:["",[Validators.required,Validators.minLength(5)]]
    })
  }
  submit(){

    this.nuevoProducto = this.userRegisterForm.value
    console.log(this.nuevoProducto)

    this.ServiceService.addProduct(this.nuevoProducto)

    console.log("ok")
    this.userRegisterForm.reset()

    this.router.navigate(['/products'])

  }

}


