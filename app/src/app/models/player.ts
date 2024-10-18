export class Player {

    id: number;
    firstName: string;
    lastName: string;
    age: number;
    height_feet: number;
    height_inch: number;
    email: string;
    constructor(id: number,
        firstName: string,
        lastName: string,
        age: number,
        height_feet: number,
        height_inch: number,
        email: string){
            this.id = id,
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.height_feet = height_feet;
            this.height_inch = height_inch;
            this.email = email;
        }
}
