import React, {lazy, Suspense} from "react";

const LazySkeletonList = lazy(() => import("./SkeletonList"));

const SkeletonList = props => (
	<Suspense fallback={null}>
		<LazySkeletonList {...props} />
	</Suspense>
);

export default SkeletonList;
