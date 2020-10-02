import React, {lazy, Suspense} from "react";

const LazyPreloader = lazy(() => import("./SearchComponentTV"));

const SearchComponentTV = props => (
	<Suspense fallback={null}>
		<LazyPreloader {...props} />
	</Suspense>
);

export default SearchComponentTV;
