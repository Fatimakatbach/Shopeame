import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  @Input() products: any[] = []
  @Input() stars:any = []




   constructor(private ServiceService:ServiceService) { }



   ngOnInit(): void {
     this.ServiceService.getProducts().subscribe((res:any) => {
       console.log(res)

       this.products = res

   })


   }
 }
