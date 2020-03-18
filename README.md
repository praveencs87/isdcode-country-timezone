## Usage

```javascript
 const timezone = require('isdcode-country-timezone');
 ```

### `getCountries()`

This function will return the array of all the countries with ISD/dial code and Time zone.

#### Output

```javascript
[
    {
       "dialcode" :  "+263",
        "country": "Zimbabwe",
       "timezone" :  "+2"
    },
    {
        "dialcode" : "+91",
        "country": "India",
        "timezone" :"+5.5"
    },
  ...
]
```

---

### `getTimezone(<dial_code>)`

This function will return the timezone of the given ISD / dial code.

### Example

To get the list of all the states of INDIA, the function call will look like:

```javascript
let timezone = getTimezone('+91');

console.log(timezone)
```

#### Output

```javascript
'India'
```
