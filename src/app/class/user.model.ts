export class User {

    constructor (name:string,lastName:string,address:string,phone:string,email:string,rol:string,username:string,password:string) {
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.rol = rol;
        this.username = username;
        this.password = password;
    }

    name:string = "";
    lastName:string = "";
    address:string = "";
    phone:string = "";
    email:string = "";
    rol:string = "";
    username:string = "";
    password:string = "";
}