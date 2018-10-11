// Imported Node Modules
const TMI = require('tmi.js'); //Twitch Messaging Interface https://docs.tmijs.org/
var client = new TMI.Client(options);
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');

// Commands start with 'w':
var commandPrefix = 'w';
client.on("action", function (channel, userstate, message, self) {
  if (self) return; // Ignores bot's own messages.
});

// TMI Module's Options Object (Passed into the new client var.)
var options = {
  options: {
      debug: true
  },
  connnection: {
      cluster: "aws",
      reconnect: true,
      timeout: Infinity
  },
  identity: {
      username: "waldybot", // <------ Bot account's username goes here. (String)
      // Default: globalVarsObjs.authenticationObject.authToken
      password: globalVarsObjs.authenticationObject.authToken // <------ OAuth password. See Objects/Auth.js for detailed instructions on key generation + Auth.js setup. 
  },
  channels: ["hdbeasta", "#HDBeasta"]
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
client.on('connected', (addr, port) => {
    // On chat connection. Msgs logged to console:
    console.log(`* Connected to ${addr}:${port}`); // Logs connected address + connected port.
    console.log(`v` + waldyBotVersion); // placeholder
    console.log(``+ client.getUsername()); // placeholder
    console.log(``+ client.getChannels()); // placeholder
    console.log(``+ client.readyState()); // placeholder
    console.log(`Ready....`); // placeholder

  }
);

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
}); // Channel Message Event Handler 
client.on('connected', (addr, port) => {
  
}); // Channel Connection Event Handler
client.on('disconnected', onDisconnectedHandler);
function onDisconnectedHandler (reason) {
  console.log(`Disconnected: ${reason}`)
  process.exit(1)
}; // Called every time the bot disconnects from Twitch


// Commands:
// Placeholder Command 1
// Placeholder Command 2


client.connect(); // "start": "node WaldyBotTwitch.js", note this for now see package.json