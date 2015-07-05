Meteor.startup(function() {

  /**
   * Posts
   */
  Factory.define('post', Posts, {
    approved_by             : function() { return null; },
    archived                : function() { return false; },
    author                  : function() { return Fake.word(); },
    author_flair_css_class  : function() { return null; },
    author_flair_text       : function() { return null; },
    banned_by               : function() { return null; },
    clicked                 : function() { return false; },
    created                 : function() { return _.random(1, 10); },
    created_utc             : function() { return _.random(1, 10); },
    distinguished           : function() { return null; },
    domain                  : function() { return (Fake.word()+'.com'); },
    downs                   : function() { return 0; },
    edited                  : function() { return false; },
    from                    : function() { return null; },
    from_id                 : function() { return null; },
    from_kind               : function() { return null; },
    gilded                  : function() { return 0; },
    hidden                  : function() { return false; },
    is_self                 : function() { return false; },
    likes                   : function() { return null; },
    link_flair_css_class    : function() { return null; },
    link_flair_text         : function() { return null; },
    media                   : function() { return {}; },
    media_embed             : function() { return {}; },
    mod_reports             : function() { return []; },
    num_comments            : function() { return 0; },
    num_reports             : function() { return null; },
    over_18                 : function() { return false; },
    permalink               : function() { return "/r/subname/postname"; },
    preview                 : function() { return {}; },
    removal_reason          : function() { return null; },
    report_reasons          : function() { return null; },
    saved                   : function() { return false; },
    score                   : function() { return _.random(1, 2000); },
    secure_media            : function() { return {}; },
    secure_media_embed      : function() { return {}; },
    selftext                : function() { return ""; },
    selftext_html           : function() { return null; },
    stickied                : function() { return false; },
    sub                     : function() { return Fake.word(); },
    sub_id                  : function() { return 's_'+Fake.word(); },
    suggested_sort          : function() { return null; },
    thumbnail               : function() { return "https://placekitten.com/g/200/300"; },
    title                   : function() { return Fake.sentence(30); },
    ups                     : function() { return _.random(1, 2000);; },
    url                     : function() { return ""; },
    user_reports            : function() { return []; },
    visited                 : function() { return false; }
  });

  if (Posts.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('post');
    });

  }

});
