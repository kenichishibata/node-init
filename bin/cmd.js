#!/usr/bin/env node
var cpipe = require('./cpipe.js');

var userArgs = process.argv.slice(2);
var extendedArgs = process.argv.slice(3);

  if (userArgs == 'help') {
      cpipe('/man',null);
      return;
  }
  else if(userArgs =='print'){
    console.log(process.argv);
    console.log(userArgs);
  }
  else if (userArgs == 'all'){
    cpipe('/../airbnb/linters/jshintrc','.jshintrc');
    cpipe('/../editorConfig/editorconfig','.editorconfig');
    cpipe('/../gitignore/gitignore','.gitignore');
    cpipe('/../airbnb/style/jscs','.jscsrc');
    cpipe('/../gulp/gulpfile.js','gulpfile.js');
    cpipe('/../npmrc/npmrc','.npmrc');

    if(extendedArgs == '--no-gulp'){
      cpipe('/../airbnb/linters/jshintrc','.jshintrc');
      cpipe('/../editorConfig/editorconfig','.editorconfig');
      cpipe('/../gitignore/gitignore','.gitignore');
      cpipe('/../airbnb/style/jscs','.jscsrc');
      cpipe('/../npmrc/npmrc','.npmrc');
      }
    if(extendedArgs == '--no-jscs'){
      cpipe('/../airbnb/linters/jshintrc','.jshintrc');
      cpipe('/../editorConfig/editorconfig','.editorconfig');
      cpipe('/../gitignore/gitignore','.gitignore');
      cpipe('/../gulp/gulpfile.js','gulpfile.js');
      cpipe('/../npmrc/npmrc','.npmrc');
    }
  }
  else if(userArgs == 'eslint'){
    console.log('eslint not yet supported');
  }

  else if(userArgs == 'gulp'){
    cpipe('/../gulp/gulpfile.js','gulpfile.js');
  }
  else if(userArgs =='editorconfig'){
    cpipe('/../editorConfig/editorconfig','.editorconfig');
  }
  else if(userArgs == 'jshint'){
    cpipe('/../airbnb/linters/jshintrc','.jshintrc');
  }
  else if(userArgs == 'gitignore'){
    cpipe('/../gitignore/gitignore','.gitignore');

  }
  else if(userArgs == 'jscs'){
    cpipe('/../airbnb/style/jscs','.jscsrc');
   }
  else{
      console.log(__dirname);
  }
