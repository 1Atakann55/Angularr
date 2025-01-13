import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from "./product-filter.pipe";
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, ProductFilterPipe, FormsModule] // Buraya ekleyin
 // Buraya ekleyin
})
export class ProductComponent {
  constructor(private alertifyService:AlertifyService){ }
  title = "Ürün Listesi"
  filterText=""
  products : Product[] = [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook", imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://dlcdnwebimgs.asus.com/gain/5707c7d1-7e0f-4897-bc93-d31d017b2edf/w800"}
  ]
    
  
addToCart(product: Product) {
  this.alertifyService.success(product.name+ " added")
}


}
