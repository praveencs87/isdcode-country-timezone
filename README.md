## Usage

### `getCountries()`

This function will return the array of all the countries with ISD/dial code and Time zone.

#### Output

```javascript
[
    {
        "+93",
        "Afghanistan",
        "+4.5"
    },
    {
        "+355",
        "Albania",
        "+1"
    },
    {
        "+213",
        "Algeria",
        "+1"
    },
    {
        "+685",
        "American Samoa",
        "-11"
    },
    {
        "+376",
        "Andorra",
        "+1"
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
