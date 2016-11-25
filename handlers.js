
exports.notFound = function(request, response){

  response.statusCode = 404;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1> 404 NOT FOUND !</h1>");


}

exports.homepage = function(request, response){

  response.setHeader("Content-Type", "text/html");
  response.end("<h1> Hello world </h1>");

}

exports.profile = function(request, response){

  var profile = {
    name: "Yuriy",
    age: 25,
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(profile));

}
