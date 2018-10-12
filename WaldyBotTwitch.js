// Imported Node Modules
const TMI = require('tmi.js'); //Twitch Messaging Interface https://docs.tmijs.org/
var client = new TMI.Client(options);
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
var testAuthNotCommited = require('./testauth.js');

// Commands start with 'w':
var commandPrefix = 'w';

//client.on("action", function (channel, userstate, message, self) { // placeholder
//  if (self) return; // Ignores bot's own messages.
//});

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
      username: "waldybot", // <-- YOUR account's username (String). See Objects/Media Storage/bot account username how to.png. 
      // Default: Use globalVarsObjs.authenticationObject.authToken
      // IF still commited as my local enviroment. Setup for default as follows: 
      // Overwrite: testAuthNotCommited.testerTwitchTokenO  bject.TestTwitchOAuth With: globalVarsObjs.authenticationObject.authToken
      password: testAuthNotCommited.testerTwitchTokenObject.TestTwitchOAuth // <-- OAuth password. See Objects/Auth.js for detailed instructions on key generation + Auth.js setup. 
  },
  channels: ["hdbeasta", "#HDBeasta"]
};

// Notes:
// Youtube guide used: https://www.youtube.com/watch?v=K6N9dSMb7sM
// Some code taken from: https://dev.twitch.tv/docs/irc/. Specifically official Twitch example chatbot. Under "Step:2 Sample Code".

// Global Vars
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];

// Startup
client.on('connected', (addr, port) => {
    // On chat connection. Msgs logged to console:
    console.log('Address:' + addr); // Connected address
    console.log('Port:' + port); // Connected port
    console.log(``+ client.getUsername()); // placeholder. Logs variation of 'justinfan + #####'. ERROR?? 
    console.log(``+ client.getChannels()); // placeholder. Logs blankspace.
    console.log(``+ client.readyState()); // Logs 'OPEN'
    console.log(`v` + waldyBotVersion); // Current version
    console.log(`Ready....`);
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

client.on("chat", function (channel, userstate, message, self) { //in progress
  if (self) return; // Ignores bot msgs
  if(message.substr(0, 1) === commandPrefix) {
    client._sendMessage(0, options.channels[0], 'WaldyBot in the house!');
  }
});


// Commands:
// Placeholder Command 1
// Placeholder Command 2


client.connect(); // See package.json: "start": "node WaldyBotTwitch.js",. Call "node WaldyBotTwitch.js" to start bot. 