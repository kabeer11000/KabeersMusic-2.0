import React, {lazy, Suspense} from 'react';

const LazyScrubbingSlider = lazy(() => import('./ScrubbingSlider'));

const ScrubbingSlider = props => (
    <Suspense fallback={null}>
        <LazyScrubbingSlider {...props} />
    </Suspense>
);

export default ScrubbingSlider;
