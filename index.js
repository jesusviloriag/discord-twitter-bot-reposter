const express = require("express");
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(80, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("TwitterBot running");
  const mySecret = process.env['token']
})

const Discord = require("discord.js");
const { GatewayIntentBits, Partials } = require('discord.js');
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.MessageReaction,
    Partials.User,
    Partials.GuildMessages,
    Discord.PartialGroupDMChannel
  ]
});

client.on('messageCreate', async (message) => {
  console.log(message);
  if (message && message.content) {
    let content = message.content.toLowerCase();

    if (content === "hi") {
      message.channel.send("Greetings, human! *beep* (I'm a robot)");
    } else if (content === "/name") {
      message.channel.send("My name is InstagramBot *beep* *boop* nice to meet you!");
    } else if (content === "ping") {
      message.channel.send("*Bzzz* pong **beep**");
    }
  }
})

client.on('ready', () => {
  console.log("TwitterBot is running...");
});

client.login(process.env['token']);

app.get("/twitter-post/", (req, res) => {

  console.log("Got request", req);

  const link = req.query.link;
  const text = req.query.text;
  const username = req.query.username;

  console.log("It's working", link, text, username);

  if(text) {
    client.channels.cache.get('1111074327203422269').send(text); 
  }
})