export interface Quiz {
    id: string;
    questions: Question[];
    courseId: string;
}

export interface Question {
    id: string;
    text: string;
    options: Option[];
    correctAnswer: string;
}

export interface Option {
    id: string;
    text: string;
}