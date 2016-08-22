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
