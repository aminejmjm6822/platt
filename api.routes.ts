import { Router } from 'express';
import { createCourse, updateCourse, getCourse, getAllCourses } from '../controllers/course.controller';
import { createQuiz, getQuiz, submitQuiz } from '../controllers/quiz.controller';

const router = Router();

// Course routes
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);
router.get('/courses/:id', getCourse);
router.get('/courses', getAllCourses);

// Quiz routes
router.post('/quizzes', createQuiz);
router.get('/quizzes/:id', getQuiz);
router.post('/quizzes/:id/submit', submitQuiz);

export default router;