# strip-utm

Removes utm tracking codes from a URL query string.

## Installation

```sh
$ npm install strip-utm --save
```

## Usage

```js
var stripUtm = require('./strip-utm');

var theUrl = 'http://example.com/?utm_campaign=RSS-Feedburner-All-Partial&utm_cid=RSS-Feedburner-All-Partial&utm_medium=feed&utm_source=feedly&utm_reader=feedly&z=last&m=middle&a=first&t=upper-middle';

console.log(stripUtm(theUrl));
```

### Output:

```
http://example.com/?a=first&m=middle&t=upper-middle&z=last
```