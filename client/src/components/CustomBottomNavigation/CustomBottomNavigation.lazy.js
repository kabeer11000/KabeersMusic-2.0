import React, {lazy, Suspense} from 'react';

const LazyBottomNavigation = lazy(() => import('./CustomBottomNavigation'));

const CustomBottomNavigation = props => (
    <Suspense fallback={null}>
        <LazyBottomNavigation {...props} />
    </Suspense>
);

export default CustomBottomNavigation;
