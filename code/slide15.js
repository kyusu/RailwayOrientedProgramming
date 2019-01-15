const daggy = require('daggy');

const Result = daggy.taggedSum('Result', {
    Success: ['data'],
    Failure: ['error']
});

const ohNoes = Result.Failure(new Error('Failed to send e-mail'));

