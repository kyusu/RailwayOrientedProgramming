const validateInput = input => {
    if (!input.name) {
        return Result.Failure(Error.NameMustNotBeBlank);
    } else if (!input.email) {
        return Result.Failure(Error.EmailMustNotBeBlank);
    } else {
        return Result.Success(input);
    }
};

const daggy = require('daggy');

const Result = daggy.taggedSum('Result', {
    Success: ['data'],
    Failure: ['error']
});

const Error = daggy.taggedSum('Error', {
    NameMustNotBeBlank: [],
    EmailMustNotBeBlank: []
});
