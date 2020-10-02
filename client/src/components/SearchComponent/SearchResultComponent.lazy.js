import React, {lazy, Suspense} from "react";
import Preloader from "../Preloader/Preloader";

const LazySearchComponent = lazy(() => import("./SearchResultComponent"));

const SearchResultComponent = props => (
	<Suspense fallback={<Preloader/>}>
		<LazySearchComponent {...props} />
	</Suspense>
);

export default SearchResultComponent;
