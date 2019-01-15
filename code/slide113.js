const validateInput = input => {
    if (!input.name) {
        return Result.Failure(Error.NameMustNotBeBlank);
    } else if (!input.email) {
        return Result.Failure(Error.EmailMustNotBeBlank);
    } else if (!checkValidity(input.email)) {
        return Result.Failure(Error.EmailNotValid(input.mail))
    } else {
        return Result.Success(input);
    }
};

const Error = daggy.taggedSum('Error', {
    NameMustNotBeBlank: [],
    EmailMustNotBeBlank: [],
    EmailNotValid: ['invalidEmail']
});
