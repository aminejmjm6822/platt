export interface Course {
    id: string;
    title: string;
    description: string;
    modules: string[]; // Array of module IDs or names
}