import React, {lazy, Suspense} from 'react';

const LazySongCard = lazy(() => import('./SongCard'));

const SongCard = props => (
    <Suspense fallback={null}>
        <LazySongCard {...props} />
    </Suspense>
);

export default SongCard;
