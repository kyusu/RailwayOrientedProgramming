const DBError = daggy.taggedSum('DBError', {
    PrimaryKeyNotValid: ['primaryKey'],
    RecordNotFound: ['primaryKey'],
    DBTimeout: ['connectionString', 'timeoutMs'],
    DBConcurrencyError: [],
    DBAuthorizationError: ['credentials']
});

const MyUseCaseError = daggy.taggedSum('MyUseCaseError', {
    NameMustNotBeBlank: [],
    EmailMustNotBeBlank: [],
    EmailNotValid: ['invalidEmail'],
    // database errors
    UserIdNotValid: ['userId'],
    DbUserNotFoundError: ['userId'],
    DbTimeout: ['connectionString'],
    DbConcurrencyError: [],
    DbAuthorizationError: ['credentials'],
    // SMTP errors
    SmtpTimeout: ['smtpConnection'],
    SmtpBadRecipient: ['emailAddress']
});

const dbResultToMyResult = dbError => dbError.cata({
    PrimaryKeyNotValid: id => MyUseCaseError.UserIdNotValid(id),
    RecordNotFound: id => MyUseCaseError.DbUserNotFoundError(id),
    // …
});