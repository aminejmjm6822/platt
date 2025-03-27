export interface User {
    id: string;
    username: string;
    password: string;
    role: 'Administrator' | 'Teacher' | 'Student';
}