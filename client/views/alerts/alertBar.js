Alerts = {

  collection: new Mongo.Collection(null),

  set: function (message, type) {

    Alerts.collection.insert({
      message: message,
      type: type || 'danger'
    })
  }
};

Template.BootstrapAlerts.helpers({
  alerts: function () {
    return Alerts.collection.find();
  }
})

Template.BootstrapAlert.rendered = function () {

  var currentAlert = this.data;

  Meteor.setTimeout(function () {
    Alerts.collection.remove( currentAlert._id )
  }, 15000);
}