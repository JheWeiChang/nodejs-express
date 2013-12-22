var i=0;
exports.index = function(req, res){

  var obj = {
  	"name" : "chi",
  	"time" : new Date().toISOString(),
  	"count" : i++
  };
  res.send(obj);
};

