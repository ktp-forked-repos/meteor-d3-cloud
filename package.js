Package.describe({
	summary: "d3-cloud project, Word clouds with d3"
});

Package.on_use(function (api){
  api.use('d3', 'client');
	api.add_files('lib/d3.layout.cloud.js', 'client');
});