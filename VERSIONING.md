# Versioning

Lithium roughly follows the [Semantic Versioning specification](http://semver.org/), but below is a quick recap and more information specific to Lithium:

### Version Numbers

Versioning will be in the format `MAJOR.MINOR.PATCH`.

In the case of a prerelease version (e.g. an alpha or beta version), the release will be suffixed by a hyphen and an alphabetical identifier. This will usually be `-alpha` or `-beta`.

### Release Timelines

Patches, such as documentation edits and code optimisation/bugfixes, will usually be collected and released once every fortnight unless there is a reason for urgency. 

### Will version X work for me?

If the version of Lithium you currently use has the same major and minor version numbers as the latest release, you should be able to upgrade without any side effects. If you were relying on an undocumented or broken feature you may have problems if these are fixed or changed, but this will be rare.

If the minor version numbers of your current version and the current release differ, you may want to check the changelog to see if you'll have problems. Features may be deprecated or added between minor versions. This may mean that a feature you are using might not be supported any more (it will still be there, but it won't be maintained and may be buggy), or the name of a new feature might conflict with the name of a variable you've been using.

The major version number will only be incremented if a change will break backwards compatability. When this happens, you'll almost certainly have to change your some part of your code or integrations with Lithium. 