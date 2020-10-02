import React, {lazy, Suspense} from "react";

const LazyDownloadListItem = lazy(() => import("./DownloadListItem"));

const DownloadListItem = props => (
	<Suspense fallback={null}>
		<LazyDownloadListItem {...props} />
	</Suspense>
);

export default DownloadListItem;
