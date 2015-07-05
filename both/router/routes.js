Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController'
});

Router.plugin('ensureSignedIn', {
  only: ['profile']
});
