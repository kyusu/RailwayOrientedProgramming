const executeUseCase = () => {
    const request = receiveRequest();
    const isValidated = validateRequest(request);
    if (!isValidated) {
        return "Request is not valid";
    }
    canonicalizeEmail(request);
    try {
        var result = db.updateDbFromRequest(request);
        if (!result) {
            return "Customer record not found";
        }
    } catch (e) {
        return "DB error: Customer record not updated";
    }

    if (!smtpServer.sendEmail(request.Email)) {
        log.error("Customer email not sent");
    }
    return "OK";
};