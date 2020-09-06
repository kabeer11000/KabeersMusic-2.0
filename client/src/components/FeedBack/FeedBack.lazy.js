import React, {lazy, Suspense} from 'react';

const LazyFeedBack = lazy(() => import('./FeedBack'));

const FeedBack = props => (
    <Suspense fallback={null}>
        <LazyFeedBack {...props} />
    </Suspense>
);

export default FeedBack;
