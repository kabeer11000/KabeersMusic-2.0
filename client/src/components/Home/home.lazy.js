import React, {lazy, Suspense} from "react";
import Preloader from "../Preloader/Preloader";

const Lazyhome = lazy(() => import("./home"));

const home = props => (
	<Suspense fallback={<Preloader/>}>
		<Lazyhome {...props} />
	</Suspense>
);

export default home;
