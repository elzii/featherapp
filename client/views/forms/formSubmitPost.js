Template.formSubmitPost.rendered = function() {
  Session.set('previewData', '')
}

Template.formSubmitPost.events({
  'keyup form textarea[name="text"]': function(event) {
    event.preventDefault()

    Template.formSubmitPost.previewData = event.currentTarget.value;

    Session.set('previewData', event.currentTarget.value)

    // console.log( Session.get('previewData'))
  }
})

Template.formSubmitPost.helpers({
  previewData: function(data) {
    return Session.get('previewData')
  }
})
