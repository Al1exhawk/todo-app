import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { TodoDashboardPage } from './views/TodoDashboardPage';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoDashboardPage />} />
            </Routes>
        </Router>
    );
}
