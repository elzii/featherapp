Router.configure({
  controller: 'AppController',
  layoutTemplate: 'layoutDefault',
  loadingTemplate: 'loading'
});

// Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
