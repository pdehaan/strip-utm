'use strict';

var assert = require('assert');

var stripUtm = require('../index'); // require('strip-utm')

var testUrls = [{
  raw: 'http://example.com/',
  expected: 'http://example.com'
}, {
  raw: 'https://cnn.com/?a=z',
  expected: 'https://cnn.com/?a=z'
}, {
  raw: 'http://example.com/?utm_campaign=RSS-Feedburner-All-Partial&utm_cid=RSS-Feedburner-All-Partial&utm_medium=feed&utm_source=feedly&utm_reader=feedly&z=last&m=middle&a=first&t=upper-middle',
  expected: 'http://example.com/?a=first&m=middle&t=upper-middle&z=last'
}];

testUrls.forEach(function (uri) {
  assert.equal(stripUtm(uri.raw), uri.expected);
});
