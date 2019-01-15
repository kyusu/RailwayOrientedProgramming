const executeUseCase = R.pipe(
    receiveRequest,
    validateRequest,
    updateDbFromRequest,
    sendEmail,
    returnMessage
);