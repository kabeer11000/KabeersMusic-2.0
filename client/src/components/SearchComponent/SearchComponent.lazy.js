import React, {lazy, Suspense} from 'react';

const LazySearchComponent = lazy(() => import('./SearchComponent'));

const SearchComponent = props => (
    <Suspense fallback={null}>
        <LazySearchComponent {...props} />
    </Suspense>
);

export default SearchComponent;
