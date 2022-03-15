import { RecoilRoot } from 'recoil';

import AppRoutes from './AppRoutes';

export default function App() {
    return (
        <RecoilRoot>
            <AppRoutes />;
        </RecoilRoot>
    );
}
