import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  extractId(modelClass, hash) {
    return Math.round(hash.week/Math.random()*hash.total);
  }

});
