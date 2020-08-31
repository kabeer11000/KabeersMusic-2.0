import React, {lazy, Suspense} from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

const LazyHistory = lazy(() => import('./History'));


const History = props => (
    <Suspense fallback={<CircularProgress/>}>
        <LazyHistory {...props} />
    </Suspense>
);

export default History;
