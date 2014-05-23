var Benchmark = require('benchmark');
var Blowfish = require('./blowfish');
var bf = new Blowfish('jaas is the way');
var suite = new Benchmark.Suite;

// add tests
suite

.add('decrypt', function() {
  bf.decrypt('0a945741a53e60877183c1d314f5102209f526570957572b')
})

.add('encrypt&decrypt', function() {
  var encoding = bf.encrypt('Config_RsA+');
  var decoding = bf.decrypt(encoding);
})

.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': false });

