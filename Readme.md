# Music Station API

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

Por conta da simplicidade e performance, a liguagem escolhida para o desenvolvimento foi o **Node.js**. Essa linguagem, apesar de simples,
é altamente escalável e flexível, atendendo praticamenteo todos requisitos não funcionais propostos. 

A estrutura do projeto está bem simples, se baseando no framework ```express``` do Node.js que oferece todas as ferramentas necessárias para a criação de uma API simples e funcional. https://expressjs.com/pt-br

Conforme o diagrama abaixo, a API recebe uma cidade (ou cidade,país) como parâmetro e faz uma requisição na API OpenWeatherMap para recuperar a temperatura atual da cidade em questão. Após essa requisição, verifica a temperatura para identificar o gênero e faz uma requisição para a Spotify Web API para receber uma lista de músicas, de acordo com o gênero identificado.

![Fluxo de requisições do App](https://raw.githubusercontent.com/armandoalmeida/ingaia-music/master/inGaiaAPI.png)

**Links úteis**

* Express - https://expressjs.com/pt-br
* API OpenWeather - https://openweathermap.org/current#name
    * Países (ISO 3166): https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes 
* Spotify Web API - https://developer.spotify.com/documentation/web-api/
    * Search: https://developer.spotify.com/documentation/web-api/reference/search/search/

## Acesso

O acesso a aplicação poderá ser feito de duas maneiras: Ambiente Local ou Heroku.

**Endpoint:** ```playlist```

``` GET https://ingaia-music-station.herokuapp.com/playlist/{cidade,país} ``` 

Esse endpoint retorna uma lista de "tracks" de acordo com um gênero musical específico, recuperado a partir da temperatura da cidade informada. 

Se a temperatura estiver:
* abaixo dos 10°C retorna o gênero "classical"
* entre 10°C e 25°C retorna o gênero "rock"
* acima ou igual a 25°C retorna o gênero "pop"


### Ambiente local

Para acessar a aplicação em um ambiente local de desenvolvimento será necessário clonar o projeto do GitHub, instalar as dependências e então executá-lo, como a seguir:

``` 
git clone https://github.com/armandoalmeida/ingaia-music.git
cd ingaia-music
npm install && npm start 
```

Acessos:
* Página inicial (Readme.md): http://localhost:3000/
* Endereço da API: http://localhost:3000/playlist/Campinas,BR

Dependências:
* git
* node | npm

### Heroku

A aplicação foi disponibilizada através da plataforma Heroku e pode ser acessada pelos links a seguir:

* Página inicial (Readme.md): https://ingaia-music-station.herokuapp.com/
* Endereço da API: https://ingaia-music-station.herokuapp.com/playlist/Campinas,BR
