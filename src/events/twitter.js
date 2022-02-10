const Twit = require("twit");
const he = require("he");
require("dotenv").config();

const { consumer_key, consumer_secret, access_token, access_token_secret } =
  process.env;

const accounts = [
  69008563, // F1 official account
  ,
  /* Constructors accounts */ 226087776, // Red Bull
  108247668, // Ferrari
  26235265, // Mercedes
  24871896, // McLaren
  90636188, // Williams
  28297965, // Alpine
  82322622, // AlphaTauri
  16143542, // Aston Martin,
  229454266, // Alpha Romeo
  2303406624, // Haas
  ,
  /* Drivers accounts */ 556260847, // Maxx Verstappen
  78502161, // Sergio Perez
  353786894, // Carlos Sainz
  262230432, // Charles Leclerc
  213969309, // Lewis Hamilton
  394892872, // George Russell
  516464106, // Lando Norris
  214413743, // Daniel Ricciardo
  397306167, // Alex Albon
  193047282, // Nicholas Latifi
  507672047, // Fernando Alonso
  490756890, // Esteban Ocon
  537951506, // Pierre Gasly
  759658867177299972, // Yuki Tsunoda
  4201552600, // Lance Stroll
  // ! Seb doesn't have a twitter account :(
  1143472657, // Valtteri Bottas
  1091070048, // Guanyu Zhou
  902951244549038081, // Mick Schumacher,
  322593965, // Nikita Mazepin
  /* other social media F1 accounts */
  2755544640, // Victor Abad efeuno,
  968920691457318914, // Formula_stats history account
];

// * CAMBIAR ESTE MODULO PARA QUE SE EJECUTE DE OTRA MANERA

module.exports = {
  name: "tweet",
  async execute(tweet) {
    // TODO
    // https://stackoverflow.com/questions/58355084/how-to-integrate-discord-js-and-twit-with-each-other-for-a-live-twitter-feed-on

    // Initiate a new Twit instance
    const Twitter = new Twit({
      consumer_key,
      consumer_secret,
      access_token,
      access_token_secret,
    });

    const stream = Twitter.stream("statuses/filter", { follow: accounts });
  },
};
