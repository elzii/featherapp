Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController'
});

Router.route('/profile/:username', {
  name: 'publicProfile',
  controller: 'PublicProfileController'
});

Router.plugin('ensureSignedIn', {
  only: ['profile']
});
