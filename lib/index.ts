function compare (dialcodes:any, arg:string) {
    return  dialcodes['dialcode'] == arg
};

export function getCountries() {
  let countries = require('./data/dialcodes.json');
  return countries;
};

export function getTimezone (dialCode:any):any {
  let dialcodes = require('./data/dialcodes.json');

  for (let i = 0; i < dialcodes.length; i++) {
      if (compare(dialcodes[i], dialCode)) {
          return dialcodes[i]['timezone'];
      }
  }

  return null;
};
