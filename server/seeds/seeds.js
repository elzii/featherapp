Meteor.startup(function() {

  /**
   * Posts
   */
  Factory.define('post', Posts, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Posts.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('post');
    });

  }

});
