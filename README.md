## MDC viaWebGL

MDC clone of [viaWebGL](https://github.com/thejohnhoffer/viaWebGL).  Please refer to the original [README](https://github.com/thejohnhoffer/viaWebGL/blob/master/README.md) for further details.

### but why?

Medicines Discovery Catapult (MDC) use viaWebGL but target a specific commit which is installed from GitHub.  This repo is cloned at
that commit.  This then enables us to build and push the package to npm.

### git remotes

The original remote has been renamed as `upstream` - to get changes run `git fetch upstream`.  `origin` now references the present (MDC) repo on [GitHub](https://github.com/mdcatapult/viawebgl). 