// npm init -y
// npm install node-telegram-bot-api typescript ts-node

// {
//     "compilerOptions": {
//       "target": "es6",
//       "module": "commonjs",
//       "outDir": "./dist",
//       "rootDir": "./src",
//       "strict": true
//     }
//   }

  
//   import TelegramBot from 'node-telegram-bot-api';

// // Replace 'YOUR_BOT_TOKEN' with the token you got from the BotFather
// const token = 'YOUR_BOT_TOKEN';

// // Create a bot instance
// const bot = new TelegramBot(token, { polling: true });

// // Handle the /start command
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Hello! I am your bot.');
// });

// // Handle incoming text messages
// bot.onText(/.*/, (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;
//   bot.sendMessage(chatId, `You said: ${text}`);
// });
