import { Sex } from './../sex/sex';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    phone: string;
    email: string;
    password: string;
    userType: boolean; // true = student; false = instructor
    
    // city: string;
    // state: string;
    // country: string;
    // street: string;
    // streetNumber: string;
    // streetComplement: string;
    // image: Blob;
    // sex: Sex;
    sex_id: number;
    
    // temporary
    adress: string; 
}
