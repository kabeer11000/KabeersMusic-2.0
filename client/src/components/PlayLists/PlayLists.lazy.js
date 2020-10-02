import React, {lazy, Suspense} from "react";

const LazyPlayLists = lazy(() => import("./PlayLists"));

const PlayLists = props => (
	<Suspense fallback={null}>
		<LazyPlayLists {...props} />
	</Suspense>
);

export default PlayLists;
