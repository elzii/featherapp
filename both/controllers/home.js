HomeController = AppController.extend({

  waitOn: function() {
    return this.subscribe('posts');
  },

  data: {
    posts: Posts.find({})
  },

  onBeforeAction: function() {

    console.log( Meteor.users.findOne({ _id: 'ggSfLDcytH4tCNF4K' }) )

    this.next()
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