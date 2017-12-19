import { User } from './../user/user';
import { Category } from './../category/category';

export class Course {
    _id: any;
    title: string;
    
    instructor: User;
    student: User;
    category: Category;

    // instructor_id: number;
    // student_id: number;
    // category_id: number;

    location: string;

    contact: string;
    description: string;
    module: boolean; // true = presencial / false = distancia
    price: number;
}
