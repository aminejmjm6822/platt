export const sendNotification = (userId: string, message: string) => {
    // Logic to send notification to the user
    console.log(`Notification sent to user ${userId}: ${message}`);
};

export const sendCourseUpdateNotification = (userId: string, courseId: string) => {
    const message = `Course ${courseId} has been updated.`;
    sendNotification(userId, message);
};

export const sendQuizReminderNotification = (userId: string, quizId: string) => {
    const message = `Reminder: Quiz ${quizId} is due soon.`;
    sendNotification(userId, message);
};