import React, {lazy, Suspense} from "react";
import Preloader from "../Preloader/Preloader";

const LazyBottomNavigation = lazy(() => import("./CustomBottomNavigation"));

const CustomBottomNavigation = props => (
	<Suspense fallback={<Preloader/>}>
		<LazyBottomNavigation {...props} />
	</Suspense>
);

export default CustomBottomNavigation;
