---
layout: docs
title: The package.lip File
---

# The `package.lip` File

All Lithium package must have a `package.lip` file in their root directory.

## Why the `.lip` file extension?

Well, `package.{yml|json}` are already widely used by other programs/languages. I/we feel like doing our bit to increase the number of unecessary file extensions.

Yes, it does stand for 'LIthium Package'. 

## What does a `package.lip` file look like?

A `package.lip` file is actually a YAML file. Because it's YAML (Lithium will parse it as YAML version 1.2), you can also use JSON if you like, because YAML is a superset of JSON.

At the very least, a `package.lip` file requires the following fields:

```yaml
name: my-package
main: src/my-package.li
version: 1.0.1
```