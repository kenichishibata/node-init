var jshint = fs.createReadStream(__dirname+'../airbnb/linters/jshintrc').pipe(fs.createWriteStream('./.jshintrc'));
var editorConfig = fs.createReadStream(__dirname+'../editorConfig/editorconfig').pipe(fs.createWriteStream('./.editorconfig'));
var gulpFile = fs.createReadStream(__dirname+'../gulp/gulpfile.js').pipe(fs.createWriteStream('./gulpfile.js'));
var gitignore = fs.createReadStream(__dirname+'../gitignore/gitignore').pipe(fs.createWriteStream('./.gitignore'));
