import { Gender } from './../gender/gender';

export class User {
    _id: any;
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
    gender: Gender;
    // genderId: string;
    
    // temporary
    adress: string; 
}
