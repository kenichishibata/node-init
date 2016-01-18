#!/usr/bin/env node

var fs = require('fs');

var userArgs = process.argv.slice(2);
var extendedArgs = process.argv.slice(3);

  if (userArgs == 'help') {
      fs.createReadStream(__dirname + '/man').pipe(process.stdout);
      return;
  }
  else if(userArgs =='print'){
    console.log(process.argv);
    console.log(userArgs);
  }
  else if (userArgs == 'all'){
      var jshint = fs.createReadStream(__dirname+'/../airbnb/linters/jshintrc').pipe(fs.createWriteStream('./.jshintrc'));
      var editorConfig = fs.createReadStream(__dirname+'/../editorConfig/editorconfig').pipe(fs.createWriteStream('./.editorconfig'));
      var gulpFile = fs.createReadStream(__dirname+'/../gulp/gulpfile.js').pipe(fs.createWriteStream('./gulpfile.js'));
      var gitignore = fs.createReadStream(__dirname+'/../gitignore/gitignore').pipe(fs.createWriteStream('./.gitignore'));
    if(extendedArgs == '--no-gulp'){
      var editorConfig = fs.createReadStream(__dirname+'/../editorConfig/editorconfig').pipe(fs.createWriteStream('./.editorconfig'));
      var gulpFile = fs.createReadStream(__dirname+'/../gulp/gulpfile.js').pipe(fs.createWriteStream('./gulpfile.js'));
      var gitignore = fs.createReadStream(__dirname+'/../gitignore/gitignore').pipe(fs.createWriteStream('./.gitignore'));
    }
  }
  else if(userArgs == 'eslint'){
    console.log('eslint not yet supported');
  }

  else if(userArgs == 'gulp'){
    var gulpFile = fs.createReadStream(__dirname+'/../gulp/gulpfile.js').pipe(fs.createWriteStream('./gulpfile.js'));
  }
  else if(userArgs =='editorconfig'){
    var editorConfig = fs.createReadStream(__dirname+'/../editorConfig/editorconfig').pipe(fs.createWriteStream('./.editorconfig'));
  }
  else if(userArgs == 'jshint'){
    var jshint = fs.createReadStream(__dirname+'/../airbnb/linters/jshintrc').pipe(fs.createWriteStream('./.jshintrc'));
  }
  else if(userArgs == 'gitignore'){
    var gitignore = fs.createReadStream(__dirname+'/../gitignore/gitignore').pipe(fs.createWriteStream('./.gitignore'));
  }
  else{
      console.log(__dirname);
  }
