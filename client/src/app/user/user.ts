import { Gender } from './../gender/gender';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    phone: string;
    email: string;
    password: string;
    userType: boolean; // true = student; false = instructor
    userTypeString: string; // true = student; false = instructor
    
    // city: string;
    // state: string;
    // country: string;
    // street: string;
    // streetNumber: string;
    // streetComplement: string;
    // image: Blob;
    gender: Gender;
    gender_id: number;
    
    // temporary
    adress: string; 

    userTypeToString(){
        if(this.userType){
            return "estudante";
        } else{
            return "instrutor";
        }
    }
}
