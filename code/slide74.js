const bind = switchFunction => twoTrackInput =>
    twoTrackInput.cata({
        Success: data => switchFunction(data),
        Failure: error => Result.Failure(error)
    });