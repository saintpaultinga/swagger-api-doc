window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "swagger.yaml", name: "Pets Api documentation"},
      {url: "api-with-samples.yaml", name: "Just a sample Api"},
      {url: "another-api-file.yaml", name: "This is for demo"},
      {url: "docs/guardian.yaml", name: "This will be great"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
