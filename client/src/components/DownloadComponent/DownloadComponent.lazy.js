import React, {lazy, Suspense} from 'react';

const LazyDownloadComponent = lazy(() => import('./DownloadComponent'));

const DownloadComponent = props => (
    <Suspense fallback={null}>
        <LazyDownloadComponent {...props} />
    </Suspense>
);

export default DownloadComponent;
