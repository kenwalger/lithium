CONTRIBUTING
============

Anyone can contribute to Lithium, so long as you don't break anything on purpose. 

This repository is mostly in Markdown, which is just fancy text. Check out John Gruber's Markdown [syntax post on Daring Fireball](http://daringfireball.net/projects/markdown/syntax) for the most complete tutorial out there. Where there is not much of a choice, we also use [Github Flavoured Markdown](https://help.github.com/articles/github-flavored-markdown), which is just an extension of plain old Markdown.

Branches
--------

Within the repository there are several branches. Any development happens in the `develop` branch. The `master` branch contains the latest stable version, while there is a branch for each previous release named using a `major.minor.fix` versioning scheme.

If you are committing changes, please do so into the `develop` branch. Many people mistakenly try and commit to the `master` branch, so make sure you are careful :).

Bug Fixes
---------

If you find any sort of error, spelling mistak, etc. in this project, feel free to fix it and submit a pull request with your commit. There is also usually a list of bugs that need to be fixed in the [TODO.md](TODO.md) file.

Feature Additions/Removals
--------------------------

Features aren't added or removed simply at the whim of any one contributor. So that we don't end up with a bloated language, we request that you open any feature requests as an issue tagged as 'feature request' first. After a period (could be a few days, could be a month) of discussion, the feature may be added to the ROADMAP.md and/or TODO.md files. Generally, a feature will be added in the next minor release, but a radical new feature may instead be added at the next major release.

The same protocol follows for removing features. Features will be deprecated after the next minor release, but not removed. A feature will only be removed at the next major release. This is mainly because users of Lithium should only worry about their code having combatability issues at a major release.

Code Style
----------

As most of this documentation is in Markdown, we don't really worry too much about any particular style for code. The following polite requests do apply though:

* We do like using `=======` after a main heading and `-------` after a secondary one, instead of `#` and `##`.
* Links should try to be inline, so don't try that `[Link text](id)` stuff.

Attribution
-----------

If you've done something for the Lithium project, it's only fair that you get appreciated. After your first commit, we invite you to add your name to the AUTHORS.md file. We'll even let you add your email, blog and Twitter handle there.
