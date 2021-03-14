var express = require("express");
//var formidable = require("formidable");
var app = express();
app.use(express.static(__dirname + '/public'));
app.get("/reg_form", (req, res) => {
var name = req.query.name;
    var email = req.query.email;
    var password = req.query.password;
    var address = req.query.address;
var phone = req.query.phone;
    var data = { name: name, email: email, password: password, address: address, phone: phone };
//res.writeHead(200, { "Content-type": "application/json" })
res.json(data);
});

app.listen(8383);
console.log("Server running at address: http://localhost:8383");