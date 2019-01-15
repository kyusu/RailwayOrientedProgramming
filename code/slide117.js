const returnMessage = result => result.cata({
    Success: () => 'Success',
    Failure: error => error.cata({
        NameMustNotBeBlank: () => 'Name must not be blank',
        EmailMustNotBeBlank: () => 'Email must not be blank',
        EmailNotValid: invalidEmail => `Email ${invalidEmail}  is not valid`,
        // database errors
        UserIdNotValid: id => `User id ${id} is not a valid user id`,
        DbUserNotFoundError: id => `User id ${id} was not found in the database`,
        DbTimeout: (_, ms) => `Could not connect to database within ${ms} ms`,
        DbConcurrencyError: () => 'Another user has modified the record. Please resubmit',
        DbAuthorizationError: () => 'You do not have permission to access the database',
        // SMTP errors
        SmtpTimeout: (_, ms) => `Could not connect to SMTP server within ${ms} ms`,
        SmtpBadRecipient: email => `The email ${email} is not a valid recipient`
    })
});