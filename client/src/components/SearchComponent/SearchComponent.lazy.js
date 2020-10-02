import React, {lazy, Suspense} from "react";
import Preloader from "../Preloader/Preloader";

const LazySearchComponent = lazy(() => import("./SearchComponent"));

const SearchComponent = props => (
	<Suspense fallback={<Preloader/>}>
		<LazySearchComponent {...props} />
	</Suspense>
);

export default SearchComponent;
