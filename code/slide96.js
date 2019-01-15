const tee = deadEndFunction = oneTrackInput => {
    deadEndFunction(oneTrackInput);
    return oneTrackInput;
};