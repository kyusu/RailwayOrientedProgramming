const executeUseCase = R.pipe(
    receiveRequest,
    validateRequest,
    canonicalizeEmail,
    updateDbFromRequest,
    sendEmail,
    returnMessage
);