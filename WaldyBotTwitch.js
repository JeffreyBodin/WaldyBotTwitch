// Imported Node Modules
const TMI = require('tmi.js'); //Twitch Messaging Interface https://docs.tmijs.org/
var client = new TMI.Client(ClientOptions);
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
var testAuthNotCommited = require('./testauth.js');

// Commands start with 'w':
var commandPrefix = 'w';

// TMI Module's Options Object (Passed into the new client var.)
var ClientOptions = {
  options: {
      debug: true
  },
  connection: {
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
  channels: ["carc1nogen", "hdbeasta", "#hdbeasta", "#HDBeasta"]
};

// Notes:
// Youtube guide used: https://www.youtube.com/watch?v=K6N9dSMb7sM
// Some code taken from: https://dev.twitch.tv/docs/irc/. Specifically official Twitch example chatbot. Under "Step:2 Sample Code".
// Twitch IRC guide used: https://blog.bashtech.net/a-guide-to-twitch-irc/
// Go here for a reference to the userstate object. Which is a chat users info. https://docs.tmijs.org/v1.2.1/Events.html#chat


// makin a edit

// Global Vars
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];


// Startup
client.on('connected', (addr, port) => {
    // On chat connection. Msgs logged to console:
    console.log('Address:' + addr); // Connected address
    console.log('Port:' + port); // Connected port
    //console.log(``+ client.getUsername()); // placeholder. Logs variation of 'justinfan + #####'. ERROR?? 
    console.log(``+ client.getChannels()); // placeholder. Logs blankspace.
    console.log(``+ client.readyState()); // Logs 'OPEN'? Returns one of the following states: "CONNECTING", "OPEN", "CLOSING" or "CLOSED".
    console.log(`v` + waldyBotVersion); // Current version
    console.log(`Ready....`);

    console.log(client.getOptions());
    console.log(client.getUsername());
  }
);


// Event Handlers:
// Note: Registers the event handlers. (Defined Below)

//client.on("action", function (channel, userstate, message, self) { // placeholder
    // Received action message on channel. (/me <message>)
//  if (self) return; // Ignores bot's own messages.
//}); 

/*client.on('message', (target, context, msg, self) => {
  // Called when chat message comes in.
  if(self) { return } // Ignore messages from the bot
  // This isn't a command since it has no prefix:
  if(msg.substr(0, 1) !== commandPrefix) {
    console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`)
    return
 }
}); // Channel Message Event Handler. placeholder */

/*client.on("message", function (channel, userstate, message, self) {
  if (self) return; // Ignore messages from the bot

  // Handle different message types..
  switch(userstate["message-type"]) {
      case "action":
          // This is an action message..
          break;
      case "chat":
          // This is a chat message..
          break;
      case "whisper":
          // This is a whisper..
          break;
      default:
          // Something else ?
          break;
  }
}); // placeholder */

client.on("chat", function (channel, userstate, message, self) { //in progress
  if(self) return; // Ignores bot msgs
  //if(message.substr(0, 1) === commandPrefix) {
  //  client._sendMessage(0, options.channels[0], 'WaldyBot in the house!');
  //}
  if(message == '@waldybot') {

  } 
  
  client.action(channel = "carc1nogen", userstate['username'] + " fuck you");
  client.action(channel = "hdbeasta", userstate['username'] + " fuck you");
});


// TESTTEST
client.on("ping", function () {
  console.log('ping');
});
client.on("pong", function (latency) {
  console.log('pong');
});

// Commands:
// Placeholder Command 1
// Placeholder Command 2


client.connect(); // See package.json: "start": "node WaldyBotTwitch.js",. Call "node WaldyBotTwitch.js" to start bot. 