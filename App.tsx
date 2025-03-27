import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/student" component={StudentDashboard} />
        <Route path="/teacher" component={TeacherDashboard} />
      </Switch>
    </Router>
  );
};

export default App;