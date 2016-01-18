```
npm install -g node-init
init all
```

# Node INIT!
 create node js AirBnB based standards ___gulpfile.js, .editorconfig, .gitignore, .jshintrc___ using commandline

# What?
  Instantly create linting file and editor configuration

# Why?
  Because I dont like installing yeoman and making a nodejs boilerplate is counter productive

# Documentation
```
init help
```

# Manual Tips
- - - -
- - - -
- - - -
- - - -


# Git
    * Install Git
      * OSX: brew install git
      * linux: yum install git or apt-get install git
      * Windows: chocolatey install git

# Node
    * Install node
      * OSX: brew install node
      * linux: yum install node or apt-get install node
      * windows: [node](https://nodejs.org/en/download/) or chocolatey install node
# Project Start
      ```
        mkdir BestNodeJSProject
        npm init
      ```
# Editor
  * Use either [atom](https://atom.io/) or [sublime](http://www.sublimetext.com/3)

# Documentation
  * Use markdown in README.md
  * Cheatsheet is in
  ```
  markdown/
  ```

# Editorconfig
## Atom(recommended)
  add .editorconfig file in
  ```
  editorconfig/.editorconfig
  ```
  to your root directory
  [atom editorconfig](https://github.com/sindresorhus/atom-editorconfig#readme)
  Go to atom install packages and then search install editorconfig

## Sublime
  add .editorconfig file in
  ```
  editorconfig/.editorconfig
  ```
  to your root directory
  Install [packagecontrol](https://packagecontrol.io/)
  Install [sublime editorconfig](https://github.com/sindresorhus/editorconfig-sublime)

# Static Linting
## jshint(recommended)
  Install JShint in dev environment
  ```
  npm install jshint gulp gulp-jshint --save-dev
  ```
  add .jshintrc in
  ```
  airbnb/linters/.jshintrc
  ```
  to root directory

## eslint
  add .eslint in
  ```
  airbnb/linters/.eslintrc
  ```
  to your root directory

# Terminal
  OSX: [iterm2](https://www.iterm2.com/)
  Linux: Native Terminal
  Windows: cmd.exe?

# Task Runner
## Gulp
  Use gulp to make your life easy (grunt syntax is too complicated)
  ```
  gulp/gulpfile.js
  ```
  add this gulp file in your root directory. Now you can run 'gulp lint' command in your Terminal

#.gitignore
    Don't forger .gitignore so that you will not accidentally upload unnecessary file to scm (e.g. node_modules)

# EOF
      Now you can start working with nodejs

#TODO
        * eslintrc support
        * man page
