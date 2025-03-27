export const API_BASE_URL = 'http://localhost:5000/api';

export const fetchCourses = async () => {
    const response = await fetch(`${API_BASE_URL}/courses`);
    if (!response.ok) {
        throw new Error('Failed to fetch courses');
    }
    return response.json();
};

export const fetchQuizzes = async (courseId) => {
    const response = await fetch(`${API_BASE_URL}/courses/${courseId}/quizzes`);
    if (!response.ok) {
        throw new Error('Failed to fetch quizzes');
    }
    return response.json();
};

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.json();
};

export const registerUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Registration failed');
    }
    return response.json();
};