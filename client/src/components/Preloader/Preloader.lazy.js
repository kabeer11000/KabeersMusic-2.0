import React, {lazy, Suspense} from 'react';

const LazyPreloader = lazy(() => import('./Preloader'));

const Preloader = props => (
    <Suspense fallback={null}>
        <LazyPreloader {...props} />
    </Suspense>
);

export default Preloader;
