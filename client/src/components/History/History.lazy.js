import React, {lazy, Suspense} from 'react';

const LazyHistory = lazy(() => import('./History'));

const History = props => (
    <Suspense fallback={null}>
        <LazyHistory {...props} />
    </Suspense>
);

export default History;
