Package.describe({
  summary: "Plus more icons",
  // Version number.
  version: "1.0.2",
  // Optional.  Default is package directory name.
  name: "plusmore:plus-more-icons",
  // Optional github URL to your source repository.
  git: "https://github.com/PlusMore/plus-more-icons.git",
});

Package.on_use(function (api){
  api.add_files('load.js', 'client');
});
