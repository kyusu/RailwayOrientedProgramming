const returnMessage = result => result.cata({
    Success: () => 'Success',
    Failure: error => error
});