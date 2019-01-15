// trim spaces and lowercase
const canonicalizeEmail = input =>
    Object.assign({}, input, {
        email: input.email.trim().toLowerCase()
    });
