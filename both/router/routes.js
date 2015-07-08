Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

// Profile
Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController'
});

// Public Profile
Router.route('/profile/:username', {
  name: 'publicProfile',
  controller: 'PublicProfileController',
  data: function() {
    var username = this.params.username;
    return Meteor.users.findOne({ username: username })
  }
});

Router.plugin('ensureSignedIn', {
  only: ['profile']
});
