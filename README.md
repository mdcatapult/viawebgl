## MDC viaWebGL

MDC clone of [viaWebGL](https://github.com/thejohnhoffer/viaWebGL).

### but why?

The DSP Atlas UI uses viaWebGL but targets a specific commit which is installed from GitHub.  This repo is cloned at
that commit and changes the `package.json` to use the npm package for `openseadragon`.  This then enables us to build 
the package and push to Nexus and npm, which in turn allows us to use the npm package in the DSP Atlas UI.

### git remotes

The original remote has been renamed as `upstream` - to get changes run `git fetch upstream`.  `origin` now references the present repo on [GitHub](https://github.com/mdcatapult/viawebgl). 