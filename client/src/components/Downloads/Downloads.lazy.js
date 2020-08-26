import React, {lazy, Suspense} from 'react';

const LazyDownloads = lazy(() => import('./Downloads'));

const Downloads = props => (
    <Suspense fallback={null}>
        <LazyDownloads {...props} />
    </Suspense>
);

export default Downloads;
