import React, {lazy, Suspense} from 'react';
import Preloader from "./components/Preloader/Preloader";

const LazyApp = lazy(() => import('./App'));

const App = props => (
    <Suspense fallback={<Preloader/>}>
        <LazyApp {...props} />
    </Suspense>
);

export default App;
