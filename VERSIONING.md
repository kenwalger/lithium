# Versioning

Lithium roughly follows the [Semantic Versioning specification](http://semver.org/).

An increase in the major version number generally means that backwards compatability has been broken. You should check the [changelog](./CHANGELOG.md) to see what changes have been made - or you can try and run your program and see if it works.

An increase in the minor version number means that a new feature has been added, or a previous feature has been deprecated (but not removed). Code written for an older version will still work, but code written for a newer version may not.

An increase in the patch version number means that a bug has been fixed. Unless you were relying on buggy behaviour (which you shouldn't), your code will work.