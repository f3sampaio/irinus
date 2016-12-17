/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "This package is responsible of the proccess of data of the application",
  // Version number.
  version: "0.0.0",
  // Optional.  Default is package directory name.
  name: "irinus:core"
});
/* This defines your actual package */
Package.onUse(function (api) {

  api.use('templating');
  api.use('fourseven:scss')
  
  api.addFiles('lib/client/templates/main.html', 'client');
});
