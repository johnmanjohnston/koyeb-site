const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require("fs");
var path = require("path");

app.get('/', (req, res) => {
  var c = null;
  
  c = Number(fs.readFileSync(path.join(__dirname, "count.txt"), {encoding: "utf8", flag: "r"}));

  fs.writeFileSync(path.join(__dirname, "count.txt"), String(c + 1));

  res.json({
    message: `count.txt: ${c}`,
  })
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
