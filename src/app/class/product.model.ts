export class Product {

    constructor (name_prod:string, trademark:string, category:string, date:string, description_prod:string, price:number) {
        this.name_prod = name_prod;
        this.trademark = trademark;
        this.category = category;
        this.date = date;
        this.description_prod = description_prod;
        this.price = price;
    }
    name_prod:string = "";
    trademark:string = "";
    category:string = "";
    date:string = "";
    description_prod:string = "";
    price:number = 0;
}