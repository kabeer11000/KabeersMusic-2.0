import React, {lazy, Suspense} from 'react';

const LazyBackDropLoader = lazy(() => import('./BackDropLoader'));

const BackDropLoader = props => (
    <Suspense fallback={null}>
        <LazyBackDropLoader {...props} />
    </Suspense>
);

export default BackDropLoader;
