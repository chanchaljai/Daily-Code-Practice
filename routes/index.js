var express = require('express');
var router = express.Router();
<<<<<<< HEAD

/* GET home page. */
router.get('/', function(req, res,) {
  res.render("index")
});

=======
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res,) {
  req.session.ban = true;
  res.render("practice");
});

router.get("/checkban", function(req, res){
  if(req.session.ban === true){
    res.send("you are banned")
  }
  else{
    res.send("not banned")
  }
  
});

router.get("/removeban", function(req, res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.send("ban remove");
  })

});

router.get("/alluser", async function(req, res){
  const alluser = await userModel.find();
  res.send(alluser);
});
// router.get("/delete", async function(req, res){
//   const deleteduser = await userModel.findOneAndDelete({
//     username: "jaiswal_123"
//   });
//   res.send(deleteduser);
// });


>>>>>>> f64fd72 (session and cookies in express generator)
module.exports = router;
