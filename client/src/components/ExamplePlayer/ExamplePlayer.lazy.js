import React, {lazy, Suspense} from 'react';

const LazyExamplePlayer = lazy(() => import('./ExamplePlayer'));

const ExamplePlayer = props => (
    <Suspense fallback={null}>
        <LazyExamplePlayer {...props} />
    </Suspense>
);

export default ExamplePlayer;
