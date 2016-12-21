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

  api.use('materialize:materialize')
  api.use('templating');
  api.use('fourseven:scss')

  // Templates
  api.addFiles('lib/client/templates/main.html', 'client');
  api.addFiles('lib/client/templates/navbar.html', 'client');

  // Stylesheets
  api.addFiles('lib/client/stylesheets/navbar.scss', 'client');
  api.addFiles('lib/client/stylesheets/main.scss', 'client');


  api.addFiles('lib/client/js/main.js', 'client');
  api.addFiles('lib/client/js/navbar.js', 'client');
});
