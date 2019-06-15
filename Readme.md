# inGaia Music Station API

## Desafio

Um estudo organizado por um grupo de pesquisadores desocupados demonstrou que as pessoas tendem a preferir diferentes gêneros musicais de acordo com a temperatura ambiente. Baseado nesta incrível descoberta, você foi contratada(o) para desenvolver um serviço revolucionário que irá sugerir músicas ao usuário de acordo com a temperatura atual da cidade dele!

### Requisitos funcionais

* Seu serviço deve ser acessível através de uma API RESTful.
* Seu serviço deve aceitar o nome de uma cidade como parâmetro, e a partir disso retornar uma playlist (somente o nome das músicas já é o * suficiente) de acordo com a temperatura atual na cidade fornecida.
* Se a temperatura:
    * for de 25ºC ou maior, o serviço deve sugerir músicas Pop;
    * estiver entre 10ºC e 25ºC, o serviço deve sugerir músicas de Rock;
    * estiver abaixo de 10ºC, a sugestão deve ser de músicas clássicas;


### Requisitos não funcionais

Seu serviço deve ser construído com atenção aos seguintes aspectos:
* Latência
* Resiliência
* Tolerância à falhas
* Segurança
* Escalabilidade
* Você deve apresentar um diagrama que represente a arquitetura de seu serviço e, se necessário, uma explicação para suas decisões de arquitetura.

## Descrição do projeto

### Arquitetura

Por conta da simplicidade e performance, a liguagem escolhida para o desenvolvimento foi o NodeJS. Essa linguagem, apesar de simples,
é altamente escalável e flexível. Por conta disso, atende os requisitos não funcionais relacionados a Latência e a Escalabilidade. 

Cidade, País (ISO 3166) ou somente Cidade

https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes

### Documentação

API OpenWeather - https://openweathermap.org/current#name


## Acesso

### Ambiente local

Clone do projeto, instalação das dependências e execução:

``` 
git clone https://github.com/armandoalmeida/ingaia-music.git
cd ingaia-music
npm install && npm start 
```

### Heroku


