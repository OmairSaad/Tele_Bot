const axios = require('axios');
// axios.get('https://catfact.ninja/fact').then(e=>{
//     console.log(e.data);
// })

//use async
const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const {bubbleSorting,insertionSorting,selectionSorting,mergeSorting,quickSorting} = require('./sortFunction');
try{
  const bot = new Telegraf(process.env.BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there, This is omair'))
  bot.hears('Selection Sort', (ctx)=> {
      return ctx.reply(selectionSorting);
  })
  bot.hears('Insertion Sort', (ctx)=> ctx.reply(insertionSorting))
  bot.hears('Bubble Sort', (ctx)=> ctx.reply(bubbleSorting));
  bot.hears('Quick Sort', (ctx)=> ctx.reply(quickSorting));
  bot.hears('Merge Sort', (ctx)=> ctx.reply(mergeSorting));
  bot.hears('Thank You', ctx=> ctx.reply('Thanks for using 👍'));
  bot.hears('Ok', ctx=> ctx.reply('Thank You 👍'));
  bot.hears('Okay', ctx=> ctx.reply('Thank You 👍'));
  bot.hears('Who are you', ctx=> ctx.reply('I am a telegram bot, developed by Omair Saad'))
  bot.hears("How are you", ctx=> ctx.reply("Fine bsdk tu bata 😄"));
  bot.hears('Thank you', ctx=> ctx.reply('Thanks for using 👍'));
  bot.on('text', ctx=> ctx.reply("Wrong Entry, Try again dude, Warna pele jaoge 😄"));
  bot.launch();
}catch(er){
  console.log("Something wrong...");
}
http.createServer((req,res)=>{
  res.end("Bot Running Succesfully")
}).listen(3000, ()=>{
  console.log("Port 3000");
})