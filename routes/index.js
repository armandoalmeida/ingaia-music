var express = require('express');
var router = express.Router();
var fs = require('fs');

var showdown = require('showdown'),
    converter = new showdown.Converter();

/* GET home page. */
router.get('/', function (req, res, next) {

    // carrega o conteudo o arquivo readme
    var file = fs.readFileSync(__dirname + '/../Readme.md', 'utf8');
    var readme = converter.makeHtml(file.toString());

    // carrega o template da pagina inicial
    var template = fs.readFileSync(__dirname + '/../template.html', 'utf8');
    template = template.toString().replace("{{title}}", "inGaia Music Station");
    template = template.toString().replace("{{content}}", readme);

    // devolve o template com o conteudo do readme
    res.send(template);
});

module.exports = router;
