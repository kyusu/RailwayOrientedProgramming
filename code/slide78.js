const R = require('ramda');

R.pipe(
    bind(nameNotBlank),
    bind(name50),
    bind(emailNotBlank)
);

