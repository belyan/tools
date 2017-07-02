<img src="https://bower.io/img/bower-logo.svg" width="200" alt="Bower">

# Bower

A package manager for the web.

[Docs API](https://bower.io/docs/api/)

## Install Bower
Bower is a command line utility. Install it with npm.
```
npm install -g bower
```

Bower requires [node](http://nodejs.org/), [npm](https://www.npmjs.com/) and [git](http://git-scm.org/).

## Install packages
Install packages with `bower install`. Bower installs packages to `bower_components/`.
```
bower install <package>
```

### Examples
```
bower install jquery
bower install jquery#2.1
bower install Snap.svg
```

## Search packages
```
bower search <package>
```

### Examples
```
bower search ember
bower search backbone
```

## Save packages
Create a `bower.json` file for your project with `bower init`

Then save new dependencies to your `bower.json` with `bower install <package> --save`

## Uninstall packages
```
bower uninstall <package>
```
