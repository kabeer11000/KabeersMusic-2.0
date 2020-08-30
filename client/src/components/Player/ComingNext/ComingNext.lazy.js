import React, {lazy, Suspense} from 'react';

const LazyComingNext = lazy(() => import('./ComingNext'));

const ComingNext = props => (
    <Suspense fallback={null}>
        <LazyComingNext {...props} />
    </Suspense>
);

export default ComingNext;
