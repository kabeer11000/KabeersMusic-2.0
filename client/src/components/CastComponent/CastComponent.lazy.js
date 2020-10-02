import React, {lazy, Suspense} from "react";

const LazyCastComponent = lazy(() => import("./CastComponent"));

const CastComponent = props => (
	<Suspense fallback={null}>
		<LazyCastComponent {...props} />
	</Suspense>
);

export default CastComponent;
