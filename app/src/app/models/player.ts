export class Player {
    first_name: string;
    last_name: string;
    age: number;
    feet: number;
    inches: number;
    email: string;

    constructor(first_name: string,
        last_name: string,
        age: number,
        feet: number,
        inches: number,
        email: string){
            this.first_name = first_name;
            this.last_name = last_name;
            this.age = age;
            this.feet = feet;
            this.inches = inches;
            this.email = email;
        }
}
