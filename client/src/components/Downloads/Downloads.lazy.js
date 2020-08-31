import React, {lazy, Suspense} from 'react';
import Preloader from "../Preloader/Preloader";

const LazyDownloads = lazy(() => import('./Downloads'));

const Downloads = props => (
    <Suspense fallback={<Preloader/>}>
        <LazyDownloads {...props} />
    </Suspense>
);

export default Downloads;
