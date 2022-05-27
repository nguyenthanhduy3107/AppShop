
export class Product{
    public name:string;
    public imagePath:string;
    public price: number;
    constructor(name: string, imagePath: string, price: number){
        this.name=name;
        this.imagePath=imagePath;
        this.price=price;
    }
}