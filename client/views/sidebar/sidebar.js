Template.sidebar.rendered = function() {
  
}


if ( Meteor.isClient ) {

  // Sidebar Items
  sidebarItems = ['sidebarSearch', 'sidebarContribute']

  /**
   * Sidebar Helpers
   * 
   * sidebars - return list of sidebar templates from array
   *
   * @note unused
   * @ref http://stackoverflow.com/questions/25926176/how-to-write-iron-router-nested-template/25926717#25926717
   */
  Template.sidebar.helpers({

    sidebarItems: function () {
      var navMenus = _.map( sidebarItems, function (templateName) {
        return { 
          template: Template[templateName]
        }
      })
      // console.log( navMenus )
      return navMenus;
    }

  })




}
