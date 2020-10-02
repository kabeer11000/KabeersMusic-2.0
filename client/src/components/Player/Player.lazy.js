import React, {lazy, Suspense} from "react";
import Preloader from "../Preloader/Preloader";

const LazyPlayer = lazy(() => import("./Player"));

const Player = props => (
	<Suspense fallback={<Preloader/>}>
		<LazyPlayer {...props} />
	</Suspense>
);

export default Player;
