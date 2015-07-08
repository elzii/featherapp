// Home
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  layoutTemplate: 'layoutSidebar',
  data : function() {
    // sidebars : ['search', 'contribute'],
    return {
      sidebars : {
        'all': true,
        'search' : false,
        'contribute' : false,
      },
      posts: Posts.find({})
    }
  }
})


// Submit Post
Router.route('/submit', {
  name: 'submit',
  controller: 'SubmitController',
  data: function() {
    return {
      
    }
  }
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
  layoutTemplate: 'layoutSidebar',
  data: function() {
    return {
      sidebars : {
        'all' : true
      },
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
