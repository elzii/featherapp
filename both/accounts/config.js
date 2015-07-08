AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});


/**
 * Extend Account Template
 * @package useraccount:bootstrap
 */
// AccountsTemplates.addField({
//   _id: "username",
//   type: "text",
//   displayName: "User Name",
//   required: true,

//   // Options object with custom properties for my layout. At the moment, there are
//   // no special properties; it is up the developer to invent them
//   options: {
//     // Put a divider before this field
//     dividerBefore: false
//   }
// })

/**
 * Account Templates Extending Fields
 * https://github.com/meteor-useraccounts/core/blob/0f92a47d2c0b7c0891af9fb382912b7a76eeb9de/Guide.md
 */
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
  },
  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: "Login",
  },
  pwd
])