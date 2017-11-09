import { User } from './../user/user';
import { Category } from './../category/category';

export class Course {
    id: number;
    title: string;
    
    instructor: User;
    student: User;
    category: Category;

    // instructor_id: number;
    // student_id: number;
    // category_id: number;

    contact: string;
    description: string;
    module: boolean; // true = presencial / false = distancia
    price: number;
}
