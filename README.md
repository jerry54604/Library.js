# Sort.js

A JavaScript function to provide more flexible sorting for Array.prototype.sort()

## Usage
**Sample Data**
```js
var data = [
  {
    id: 3,
    name: {
      first: "Bul",
      last: "Basaur"
    },
    gender: "M"
  },
  {
    id: 2,
    name: {
      first: "Char",
      last: "Mander"
    },
    gender: "F"
  },
  {
    id: 1,
    name: {
      first: "Squir",
      last: "Tle"
    },
    gender: "M"
  }
];
```

**Example 1:**
Sort by single field
```js
data.sort(sort_by("id"));
```

**Example 2:**
Sort by multiple field and nested json
```js
data.sort(sort_by("name.first", "name.last"));
```

**Example 3:**
Sort by reverse order
```js
data.sort(sort_by({ name: "id", reverse: true }));
```

**Example 4:**
Sort by last name ignore case (custom primer)
```js
data.sort(sort_by({ name: "name.last", primer: function(a) { return a.toUpperCase() } }));
```

# DateTime.js

A JavaScript class to format Date object

## Usage

Custom Date Time format string
```js
// Will return something like this 8-Sep-2016 10:1:49 767 AM +8
// Results might be differ based on your timezone and localization
console.log(DateTime.formatDate(new Date(), "dd-MMM-yyyy hh:mm:ss fff tt z"));
```

Get time elapsed
```js
// This example will return you 12 months
console.log(DateTime.timeSince(new Date("9/8/2015")));
```
