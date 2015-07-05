HomeController = AppController.extend({

  waitOn: function() {
    return this.subscribe('posts');
  },

  data: {
    posts: Posts.find({})
  },

  onAfterAction: function () {
    Meta.setTitle('Home');
  }

})


/**
 * Events
 */
HomeController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
})


if ( Meteor.isClient ) {

}