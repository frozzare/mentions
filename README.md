# mentions

Get user mentions from string or replace user mentions with something else.

Install the module with npm:

```
$ npm install mentions
```

or with Bower, with AMD and browser support:

```
$ bower install mentions
```

```
$ node
> var mentions = require('mentions');
undefined
> mentions('hello @frozzare').get()
[ '@frozzare' ]
> mentions('hello @frozzare ping @user').get()
[ '@frozzare', '@user' ]
> mentions('hello @frozzare ping @user').replace(function (mention) {
    return '<a href="http://twitter.com/' + match.substr(1) + '">' + match + '</a>';
  });
> 'hello <a href="http://twitter.com/frozzare">@frozzare</a> ping <a href="http://twitter.com/user">@user</a>'
```

## License
Copyright (c) 2014 Fredrik Forsmo  
Licensed under the MIT license.
