import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/product/product.model';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-popular-product-item',
  templateUrl: './popular-product-item.component.html',
  styleUrls: ['./popular-product-item.component.css']
})
export class PopularProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;
  @Output() productSelected = new EventEmitter<void>();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onSelected() {
    this.productService.productSelected.emit(this.product);
  }

}
