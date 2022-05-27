import { Product } from "./product.model";

export class ProductService{
    private products:Product[]=[
        new Product('30W USB type-C','assets/images/items/30W-USB-C.jpg',800000),
        new Product('Air Pod Max','assets/images/items/airpod-max.jpeg',48000000),
        new Product('Air Pod Pro','assets/images/items/airpod-pro.jpg',7800000),
        new Product('Air Pod 2','assets/images/items/airpod2.jpeg',4200000),
        new Product('Air Pod 3','assets/images/items/airpod3.jpeg',6700000),
        new Product('Apple Watch Charge','assets/images/items/apple-watch-charge.jpg',600000),
        new Product('Apple Keyboard','assets/images/items/keyboard.jpg',2800000),
        new Product('Lightning Cable','assets/images/items/lightning-cable.jpeg',400000),
        new Product('Magic Mouse 2 Gray','assets/images/items/mouse-space.jpeg',2400000),
        new Product('Magic Mouse 2 White','assets/images/items/mouse-white.jpeg',2200000),
        new Product('Apple Multiport','assets/images/items/Multiport.jpg',2700000),
        new Product('Apple Pencil','assets/images/items/pencil.jpeg',2300000),
        new Product('USB Type-C Power Adapter','assets/images/items/USB-C_power-adpter.jpg',1800000),
        new Product('USB Type-C','assets/images/items/USB-C.jpeg',600000),
        new Product('Apple Watch','assets/images/items/watch.jpg',12800000)
    ]
    getProduct() {
        return this.products.slice(); 
        }
}