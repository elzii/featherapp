# Featherapp

Reddit clone(ish) in meteor.

### 5ifty&5ifty Dev Notes

* Extending User Profile
  * Look in collection/users.js. Uses collection2 to attach a schema to the user in the 'profile' object. It then needs certain permissions to allow the user to update itself.

* Form Validation
  * Uses collection2 method of update/insert. Returns an `error` object with `invalidKeys` if inputs do not match schema definitions.

* Client functions
  * Some clientside methods are in `compatibility/client.js`. The compatibility folder gets load priority ensuring correct read order.
  * Most jQuery DOM operations are done here.

### Subs

- [ ] Sub creation needs all fields in form
- [ ] Sub listing needs all fields from collecton
- [ ] Ability to update sub