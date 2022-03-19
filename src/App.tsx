import Background from '@components/Background/Background';
import { RecoilRoot } from 'recoil';

import AppRoutes from './AppRoutes';

export default function App() {
    return (
        <RecoilRoot>
            <Background>
                <AppRoutes />
            </Background>
        </RecoilRoot>
    );
}
