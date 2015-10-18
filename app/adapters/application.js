import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForFindRecord: function(id) {
    var url = this._super();
    return url + '/repos/' + id;
  },

  headers: {
    Authorization: "token 26ffd0567614bbbd7dbc9566a51aead3d746be70"
  }
});
