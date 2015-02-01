'use strict';

var url = require('url');

var normalizeUrl = require('normalize-url');

function stripUtm(queryObj) {
  var cleanQuery = {};
  Object.keys(queryObj).filter(function (key) {
    return !(/^utm_/i).test(key);
  }).forEach(function (key) {
    cleanQuery[key] = queryObj[key];
  });
  return cleanQuery;
}

module.exports = function (uri) {
  var uriObj = url.parse(uri, true);
  uriObj.query = stripUtm(uriObj.query);
  delete uriObj.search;
  var uriStr = url.format(uriObj);
  return normalizeUrl(uriStr);
};
