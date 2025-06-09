var _ = require('lodash');

var data = ['raman','rahual',2,4,6,1,2,4,3,'raman'];
var filter = _.uniq(data);

console.log(filter);