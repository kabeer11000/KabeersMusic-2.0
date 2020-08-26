import React, {lazy, Suspense} from 'react';

const LazyCustomAppBar = lazy(() => import('./CustomAppBar'));

const CustomAppBar = props => (
    <Suspense fallback={null}>
        <LazyCustomAppBar {...props} />
    </Suspense>
);

export default CustomAppBar;
