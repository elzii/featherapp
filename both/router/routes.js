Router.route('/', {
  name: 'home'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController'
});

Router.plugin('ensureSignedIn', {
  only: ['profile']
});
