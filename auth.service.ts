export interface User {
    id: string;
    username: string;
    password: string;
    role: 'admin' | 'teacher' | 'student';
}

export class AuthService {
    private users: User[] = [];

    register(username: string, password: string, role: 'admin' | 'teacher' | 'student'): User {
        const newUser: User = {
            id: this.generateId(),
            username,
            password, // In a real application, make sure to hash the password
            role,
        };
        this.users.push(newUser);
        return newUser;
    }

    login(username: string, password: string): string | null {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            return this.generateToken(user);
        }
        return null;
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    private generateToken(user: User): string {
        // Implement token generation logic (e.g., JWT)
        return `token-for-${user.username}`;
    }

    validateToken(token: string): User | null {
        // Implement token validation logic
        const username = token.split('-')[2];
        return this.users.find(u => u.username === username) || null;
    }
}