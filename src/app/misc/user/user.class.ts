export class User {
    id: number = 0;
    username: string= "";
    password: string= "";
    firstname: string= "";
    lastname: string= "";
    phone: string= "";
    email: string= "";
    IsReviewer: boolean
    IsAdmin: boolean


    constructor(id: number, username: string, password: string, firstname: string, lastname: string, phone: string, email: string, IsReviewer: boolean, IsAdmin: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.IsReviewer = IsReviewer;
        this.IsAdmin =IsAdmin;
    }
}