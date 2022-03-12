import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TodoDashboardPage } from './views/TodoDashboard';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoDashboardPage />} />
            </Routes>
        </Router>
    );
};
