const map = singleTrackFunction => R.pipe(
    bind(singleTrackFunction),
    Result.Success
);