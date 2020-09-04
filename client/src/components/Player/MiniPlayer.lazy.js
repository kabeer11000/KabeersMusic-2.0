import React, {lazy, Suspense} from 'react';
import Preloader from "../Preloader/Preloader";

const LazyPlayer = lazy(() => import('./MiniPlayer'));

const MiniPlayer = props => (
    <Suspense fallback={<Preloader/>}>
        <LazyPlayer {...props} />
    </Suspense>
);

export default MiniPlayer;
