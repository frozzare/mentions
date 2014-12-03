var mentions = require('./mentions'),
    assert   = require('assert');

it('should return all mentions in string', function () {
  assert.equal(2, mentions('@Frozzare @kollegorna tackar!').get().length);
  assert.equal(3, mentions('@Frozzare hello @JohnieHjelm what\'s up? ping @mariastarck').get().length);
});

it('should replace all mentions with hello_world', function () {
  var str = mentions('@Frozzare hello @JohnieHjelm what\'s up? ping @mariastarck')
    .replace(function (mention) {
      return 'hello_world';
    })
    .split(' ');

  var sum = 0;

  for (var i = 0, l = str.length; i < l; i++) {
    if (str[i] === 'hello_world') {
      sum++;
    }
  }

  assert.equal(3, sum);
});
