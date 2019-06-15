const express = require('express');
const fs = require('fs');
const showdown = require('showdown');

const router = express.Router();

const converter = new showdown.Converter();

/* GET home page. */
router.get('/', (req, res, next) => {

    // carrega o conteudo o arquivo readme
    const file = fs.readFileSync(__dirname + '/../Readme.md', 'utf8');
    const readme = converter.makeHtml(file.toString());

    // carrega o template da pagina inicial
    let template = fs.readFileSync(__dirname + '/../template.html', 'utf8');
    template = template.toString().replace("{{title}}", "inGaia Music Station");
    template = template.toString().replace("{{content}}", readme);

    // devolve o template com o conteudo do readme
    res.send(template);
});

module.exports = router;
