import React, {lazy, Suspense} from 'react';
import Preloader from "../Preloader/Preloader";

const LazyCustomAppBar = lazy(() => import('./CustomAppBar'));

const CustomAppBar = props => (
    <Suspense fallback={<Preloader/>}>
        <LazyCustomAppBar {...props} />
    </Suspense>
);

export default CustomAppBar;
