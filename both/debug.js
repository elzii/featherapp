/**
 * Debug Config
 *
 * 
 * colors
 */
debugConfig = {
  // Console (Client)
  console : {
    color : {
      'error'     : '#da1a1a',
      'event'     : '#3d8627',
      'function'  : '#3db330',
      'callback'  : '#6c6c6c',
      'object'    : '#ac07db',
      'animation' : '#c3028f',
      'control'   : '#d2a946',
      'plugin'    : '#e734d0',
      'waypoint'  : '#4e77c1',
      'hash'      : '#ad74ed',
      'number'    : '#1c1c1c',
    }
  },
}

debugEvent = function(event, template, self, type) {

  var type = type || 'log';

  // console[type]('%cEVENT', 'color:'+debugConfig.console.color.event, event)
  // console[type]('%cTEMPLATE', 'color:'+debugConfig.console.color.function, template)
  // console[type]('%cUNKOWN', 'color:'+debugConfig.console.color.plugin, obj)
  // console[type]('%cTHIS', 'color:'+debugConfig.console.color.control, self)

  // console.table([event.target, event.currentTarget, event.type, event.pageX, event.pageY])
  // console.table([template.isRendered, template.parentView, template.renderCount])
  
  console.table({
    'event' : { 
      target: event.target, 
      currentTarget : event.currentTarget,
      type : event.type,
      pageX : event.pageX,
      pageY : event.pageY,
    }
  })

}