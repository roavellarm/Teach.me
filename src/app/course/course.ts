import { Category } from './../category/category';

export class Course {
    
    id: number;
    title: string;
    instructor: string;
    category: Category;
    description: string;
    module: boolean; // true = presencial / false = distancia
    price: number;
}
