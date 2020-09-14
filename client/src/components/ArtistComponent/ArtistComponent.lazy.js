import React, {lazy, Suspense} from "react";

const LazyArtistComponent = lazy(() => import("./ArtistComponent"));

const ArtistComponent = props => (
    <Suspense fallback={null}>
        <LazyArtistComponent {...props} />
    </Suspense>
);

export default ArtistComponent;
