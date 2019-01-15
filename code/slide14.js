const daggy = require('daggy');

const Result = daggy.taggedSum('Result', {
    Success: ['data'],
    ValidationError: ['error'],
    UpdateError: ['error'],
    SmtpError: ['error'],
});

const hurray = Result.Success('Hurray');
