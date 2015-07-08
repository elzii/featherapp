// Home
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  layoutTemplate: 'layoutSidebar'
})


// Profile
Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController',
  data: function() {
    return {
      
    }
  }
})

/**
 * Public Profile
 * GET profile/:username
 */
Router.route('/profile/:username', {
  name: 'publicProfile',
  controller: 'PublicProfileController',
  data: function() {
    return {
      userData : Meteor.users.findOne({ username: this.params.username })
    }
  }
})


/**
 * Sub
 * GET sub/:name
 * 
 * @ref https://github.com/iron-meteor/iron-router/blob/devel/examples/reactive_state/reactive_state.js
 */
Router.route('/sub/:name', function () {
  this.set('subId', this.params.name)
  this.render('Sub')
})


/**
 * Router Plugins
 */
Router.plugin('ensureSignedIn', {
  only: ['profile']
})
