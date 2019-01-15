const validateInput = input => {
    if (!input.name) {
        return Result.Failure('Name must not be blank');
    } else if (!input.email) {
        return Result.Failure('E-mail must not be blank');
    } else {
        return Result.Success(input);
    }
};