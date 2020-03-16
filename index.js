compare = function (dialcodes, arg) {
      return  dialcodes[0] == arg
};

exports.getCountries = function () {
    let countries = require('./data/dialcodes.json');
    return countries;
};

exports.getTimezone = function (dialCode) {
    let dialcodes = require('./data/dialcodes.json');

    for (let i = 0; i < dialcodes.length; i++) {
        if (compare(dialcodes[i], dialCode)) {
            return dialcodes[i][2];
        }
    }

    return null;
};
