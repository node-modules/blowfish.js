var should = require('should');
var Blowfish = require('../blowfish');
var bf = new Blowfish('jaas is the way');

describe('blowfish', function () {

  it('success', function () {
    
    var src = 'Config_RsA+';
    var encoding = bf.encrypt(src);
    var decoding = bf.decrypt(encoding);
    decoding.should.eql(src);

    src = 'test1234';
    encoding = bf.encrypt(src);
    decoding = bf.decrypt(encoding);
    decoding.should.eql(src);

    encoding = '0a945741a53e60877183c1d314f5102209f526570957572b';
    bf.decrypt(encoding).toString().should.eql('ssheartTB007writer');

  });

});

