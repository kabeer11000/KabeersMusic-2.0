import React, {lazy, Suspense} from "react";
import Preloader from "../Preloader/Preloader";
import {pure} from "recompose";

const LazyPlayer = lazy(() => import("./MiniPlayer"));

const MiniPlayer = props => (
	<Suspense fallback={<Preloader/>}>
		<LazyPlayer {...props} />
	</Suspense>
);

export default pure(MiniPlayer);
