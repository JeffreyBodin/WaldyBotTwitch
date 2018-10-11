// Imported Node Modules
var TMI = require('tmi.js'); //Twitch Messaging Interface https://docs.tmijs.org/
var client = new TMI.client(options);
var fs = require('fs');

// Valid commands start with:
var commandPrefix = '!';

// TMI Module's Options Object (Passed into the new client var.)
var options = {
  options: {
      debug: true
  },
  connnection: {
      cluster: "aws",
      reconnect: true
  },
  identity: {
      username: "WaldyBot",
      password: "oauth:pytxbth2ifgpojihds4c80rmjj1ivm" // http://twitchapps.com/tmi/ to create API Key
  },
  channels: ["HDBeasta"]
};

// Notes:
// Youtube guide used: https://www.youtube.com/watch?v=K6N9dSMb7sM
// Some code taken from: https://dev.twitch.tv/docs/irc/. Specifically official Twitch example chatbot. Under "Step:2 Sample Code".

// Global Vars
// Note: UNDER CONSTRUCTION NO CURRENT USE
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];

// Startup
// Note: UNDER CONSTRUCTION NO CURRENT USE
//client.on('ready', () => {
//    console.log('v' + waldyBotVersion);
//    console.log('Ready....'); 
//  }
//);

// Event Handlers:
// Note: Registers the event handlers. (Defined Below)
client.on('message', (target, context, msg, self) => {
  // Called when chat message comes in.

  if(self) { return } // Ignore messages from the bot
  // This isn't a command since it has no prefix:
  if(msg.substr(0, 1) !== commandPrefix) {
    console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`)
    return
  }
}); 
client.on('connected', (addr, port) => {
  // Called on chat connection.
  
  // msgs logged to console:
  console.log(`* Connected to ${addr}:${port}`);
}); // Channel Connection Event Handler
client.on('disconnected', onDisconnectedHandler);
 

function onDisconnectedHandler (reason) {
  console.log(`Disconnected: ${reason}`)
  process.exit(1)
}; // Called every time the bot disconnects from Twitch

// Commands:
// Placeholder Command 1
// Placeholder Command 2


client.connect();