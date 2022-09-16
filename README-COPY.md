## MDC viaWebGL

MDC clone of [viaWebGL](https://github.com/thejohnhoffer/viaWebGL).  Please refer to the top level `README` for further details.

### but why?

The DSP Atlas UI uses viaWebGL but targets a specific commit which is installed from GitHub.  This repo is cloned at
that commit.  This then enables us to build and push the package to npm, allowing the DSP Atlas UI to use the npm package.

### git remotes

The original remote has been renamed as `upstream` - to get changes run `git fetch upstream`.  `origin` now references the present repo on [GitHub](https://github.com/mdcatapult/viawebgl). 