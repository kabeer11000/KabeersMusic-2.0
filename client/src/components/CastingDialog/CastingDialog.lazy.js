import React, {lazy, Suspense} from "react";

const LazyCastingDialog = lazy(() => import("./CastingDialog"));

const CastingDialog = props => (
	<Suspense fallback={null}>
		<LazyCastingDialog {...props} />
	</Suspense>
);

export default CastingDialog;
