import React, {lazy, Suspense} from 'react';

const LazyHideOnScroll = lazy(() => import('./HideOnScroll'));

const HideOnScroll = props => (
    <Suspense fallback={null}>
        <LazyHideOnScroll {...props} />
    </Suspense>
);

export default HideOnScroll;
