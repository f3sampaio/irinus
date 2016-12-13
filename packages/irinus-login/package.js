/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "This package is responsible to the login of the application",
  // Version number.
  version: "0.0.0",
  // Optional.  Default is package directory name.
  name: "irinus:login"
});
/* This defines your actual package */
Package.onUse(function (api) {

  api.use('templating');
  api.use('fourseven:scss')

  // Templates
  api.addFiles('lib/client/templates/login.html', 'client')

  // Stylesheets
api.addFiles('lib/client/stylesheets/login.scss', 'client')

  // JavaScript
});
