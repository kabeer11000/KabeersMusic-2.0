import React, {lazy, Suspense} from 'react';

const Lazyhome = lazy(() => import('./home'));

const home = props => (
    <Suspense fallback={null}>
        <Lazyhome {...props} />
    </Suspense>
);

export default home;
