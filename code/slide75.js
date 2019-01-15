const nameNotBlank = input => {
    if (!input.name) {
        return Result.Failure('Name must not be blank');
    } else {
        return Result.Success(input);
    }
};

const name50 = input => {
    if (input.name.length > 50) {
        return Result.Failure('Name must not be longer than 50 chars');
    } else {
        return Result.Success(input);
    }
};

const emailNotBlank = input => {
    if (!input.email) {
        return Result.Failure('E-mail must not be blank');
    } else {
        return Result.Success(input)
    }
};
