const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
const discordwebhook1 = new Discord.WebhookClient ('446043615240912927', 'VgVC1cAHK_K4bgbbnKRvuMtJ5KFagK4iMUZVQ2bj89Ivn7trsg5tQOwZllpUf9lGppTJ');
var embed = new Discord.RichEmbed()
const request = require('request');
var apiai = require('apiai');
var config = require('./config');
var app = apiai(config.Dialogflow);
console.log(config);
//const bot = require ('./bot.js');
//const botkit = require ('./public/client.js');

//embedColors


const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777


var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

var fortunes = [
    "Yes.",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definelty.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now...",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good...",
    "Very doubtful.",
];

//bot ready
client.on("ready", () => {
    console.log("Bot Ready For Use")
})

client.on('message', function(message){
        if((message.cleanContent.startsWith("@" + client.user.username) || message.channel.type == 'dm') && client.user.id != message.author.id){
        var mess = remove(client.user.username, message.cleanContent);
        console.log(mess);
        const user = message.author.id;
        var promise = new Promise(function(resolve, reject) {
            var request = app.textRequest(mess, {
                sessionId: user
            });
            request.on('response', function(response) {
                console.log(response);
                var rep = response.result.fulfillment.speech;
                resolve(rep);
            });

            request.on('error', function(error) {
                resolve(null);
            });

            request.end();
        });

        (async function(){
            var result = await promise;
            if(result){
                message.reply(result);
            } else{
                message.reply("nothing here");
            }
        }());

    }
});


function remove(username, text){
    return text.replace("@" + username + " ", "");
}

client.login(config.Discord);

/*
var result;
var catList= new Array("test","test2",);
var RandCat = function() {
  
  /*function request(request){
    request('http://aws.random.cat/meow', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const catImageUrl = JSON.parse(body)
      var catURL = catImageUrl.file 
      console.log('FOUND CAT! LINK: ', catURL)
      catList.unshift(catURL)
      return catURL
//      var cat = 
  //    client.on("message", (message) => {
//        message.channel
    } else {
      console.log('CANNOT FIND CAT! (Is your internet not working?)')
    }
  });     
}
  function callback(callback){
    if (catURL = !null) {
      console.log('You have added a new cat to the list')
      console.log(catURL)
                      }
    else {
      console.log('No new cat found')
    }
  }
};
      
                       
                    
                       
                    

var catLink = catURL;;
var catRequest = request;
var catResult = result; 


console.log(RandCat(request,result)); 
*/
    
    const responseObject = {
      "Hello": "Hello everyone.",
      "What?": "!chicken",
      "Morning": "Good morning!",
      "Good morning": "Good morning!",
      "roll one d twenty" : "!r 1d20!"
      

    };

    client.on("message", (message) => {
      if(responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
      }
    });


const stitch = require("mongodb-stitch")
const clientPromise = stitch.StitchClientFactory.create('npcbot-eckhj');
clientPromise.then(client => {
  const db = client.service('mongodb', 'mongodb-atlas').db('NPCBot');
  client.login().then(() =>
    db.collection('NPCs').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
  ).then(() =>
    db.collection('NPCs').find({owner_id: client.authedId()}).limit(100).execute()
  ).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });
});



module.exports = function(controller) {

  function keepalive() {

    request({
      url: 'http://' + process.env.PROJECT_DOMAIN + '.glitch.me',
    }, function(err) {

      setTimeout(function() {
        keepalive();
      }, 55000);

    });

  }

  // if this is running on Glitch
  if (process.env.PROJECT_DOMAIN) {

    // Register with studio using the provided domain name
    controller.registerDeployWithStudio(process.env.PROJECT_DOMAIN + '.glitch.me');

    // make a web call to self every 55 seconds
    // in order to avoid the process being put to sleep.
    keepalive();

  }
}

// Send a basic message
//discordwebhook1.send('hello!')
  //.then(message => console.log(`Sent message: ${message.content}`))
  //.catch(console.error);


https://hooks.zapier.com/hooks/catch/3302443/a4hne6/
client.login(process.env.SECRET);