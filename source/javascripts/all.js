//= require "bootstrap"

//DailyCred
(function() {
  var dc, dc_opts, url;
  dc_opts = {
    clientId: "92385cdc-829f-4dc7-82f0-9212098fa53c",
    home: "https://www.dailycred.com",
    personaAudience: ""
  };
  dc = document.createElement("script");
  url = dc_opts.home + "/public/js/cred.coffee";
  dc.src = url;
  $(document).ready(function (){
  	document.body.appendChild(dc);
  });
  window.dc_opts = dc_opts;
}).call(this);