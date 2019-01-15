const R = require('ramda');

const validateRequest = R.pipe(
    bind(nameNotBlank),
    bind(name50),
    bind(emailNotBlank)
);

