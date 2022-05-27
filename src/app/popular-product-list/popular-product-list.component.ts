import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-popular-product-list',
  templateUrl: './popular-product-list.component.html',
  styleUrls: ['./popular-product-list.component.css']
})
export class PopularProductListComponent implements OnInit {

  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

}
