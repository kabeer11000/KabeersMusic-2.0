import React, {lazy, Suspense} from "react";

const LazyLiked = lazy(() => import("./Liked"));

const Liked = props => (
	<Suspense fallback={null}>
		<LazyLiked {...props} />
	</Suspense>
);

export default Liked;
