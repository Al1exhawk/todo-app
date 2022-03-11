import { Routes, Route } from 'react-router-dom';

import { TodoDashboardPage } from './views/TodoDashboard';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoDashboardPage />} />
            {/* <Route path="about" element={<About />} /> */}
        </Routes>
    );
};
