const map = singleTrackFunction => twoTrackInput =>
    twoTrackInput.cata({
        Success: data => Result.Success(singleTrackFunction(data)),
        Failure: error => Result.Failure(error)
    });

