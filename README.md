# mentions [![Build Status](https://secure.travis-ci.org/frozzare/mentions.png?branch=master)](http://travis-ci.org/frozzare/mentions)

Get user mentions from string or replace user mentions with something else.

Install the module with npm:

```
$ npm install mentions
```

or with Bower, with AMD and browser support:

```
$ bower install mentions
```

```javascript
$ node
> var mentions = require('mentions');
undefined
> mentions('hello @frozzare').get()
['@frozzare']
> mentions('hello @frozzare ping @user').get()
['@frozzare', '@user']
> mentions('hello @frozzare ping @user').replace(function (mention) {
    return '<a href="http://twitter.com/' + mention.substr(1) + '">' + mention + '</a>';
  });
> 'hello <a href="http://twitter.com/frozzare">@frozzare</a> ping <a href="http://twitter.com/user">@user</a>'
```

## License

MIT © [Fredrik Forsmo](https://github.com/frozzare)
