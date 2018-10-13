// Imported Node Modules
const TwitchJs = require('twitch-js').default; // TwitchJS https://twitch-apis.github.io/twitch-js/docs/getting-started
//const tmi = require('tmi.js'); //Twitch Messaging Interface https://docs.tmijs.org/ // TMI REDO
//var client = new tmi.client(ClientOptions); // TMI REDO
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
var testAuthNotCommited = require('./testauth.js');

// Commands start with 'w':
var commandPrefix = 'w';

// TMI Module's Options Object (Passed into the new client var.)
// TMI REDO
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
      // Overwrite: testAuthNotCommited.testerTwitchTokenObject.TestTwitchOAuth With: globalVarsObjs.authenticationObject.authToken
      password: testAuthNotCommited.testerTwitchTokenObject.TestTwitchOAuth // <-- OAuth password. See Objects/Auth.js for detailed instructions on key generation + Auth.js setup. 
  },
  channels: ["carc1nogen", "hdbeasta", "#hdbeasta", "#HDBeasta"]
};

// Notes:
// Youtube guide used: https://www.youtube.com/watch?v=K6N9dSMb7sM
// Some code taken from: https://dev.twitch.tv/docs/irc/. Specifically official Twitch example chatbot. Under "Step:2 Sample Code".
// Twitch IRC guide used: https://blog.bashtech.net/a-guide-to-twitch-irc/
// Go here for a reference to the userstate object. Which is a chat users info. https://docs.tmijs.org/v1.2.1/Events.html#chat


// Global Vars
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];

var TwitchJsClient = new TwitchJs({ twitchPassword, twitchUserName });
var twitchUserName = 'waldybot'; // <-- YOUR account's username (String). See Objects/Media Storage/bot account username how to.png.
  // Default: Use globalVarsObjs.authenticationObject.authToken
    // IF still commited as my local enviroment. Setup as follows: 
      // Overwrite: testAuthNotCommited.testerTwitchTokenObject.TestTwitchOAuth 
      // With: globalVarsObjs.authenticationObject.authToken
var twitchPassword = testAuthNotCommited.testerTwitchTokenObject.TestTwitchOAuth; // <-- OAuth password. 
  // See Objects/Auth.js for detailed instructions on key generation + Auth.js setup.
var twitchChannels = {
  channels: ["carc1nogen", "hdbeasta", "#hdbeasta", "#HDBeasta"] // <-- YOUR twitch channels you want to connect to. Overwite/add your channels here. 
}
var { api, chatConstants } = TwitchJsClient;
var { chat } = TwitchJsClient;


// Global Objects


// Startup
// TMI REDO
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

// TMI REDO
client.on("chat", function (channel, userstate, message, self) { //in progress
  if(self) return; // Ignores bot msgs
  //if(message.substr(0, 1) === commandPrefix) {
  //  client._sendMessage(0, options.channels[0], 'WaldyBot in the house!');
  //}
  if(message == '@waldybot') {

  } 
  console.log(channel);
  client.action(channel = "carc1nogen", userstate['username'] + " fuck you");
  client.action(channel = "hdbeasta", userstate['username'] + " fuck you");
});


// TESTTEST
  // Get featured streams.
api.get('streams/featured').then(response => {
  console.log(response)
})
  // Listen to all events.
const log = msg => console.log(msg)
chat.on(chatConstants.EVENTS.ALL, log)



// TMI REDO
client.on("ping", function () {
  console.log('ping');
});
// TMI REDO
client.on("pong", function (latency) {
  console.log('pong');
});

// Called every time a message comes in:
// TMI REDO 
function onMessageHandler (target, context, msg, self) {
  if (self) { return } // Ignore messages from the bot

  // This isn't a command since it has no prefix:
  if (msg.substr(0, 1) !== commandPrefix) {
    console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`)
    return
  }

  // Split the message into individual words:
  const parse = msg.slice(1).split(' ')
  // The command name is the first (0th) one:
  const commandName = parse[0]
  // The rest (if any) are the parameters:
  const params = parse.splice(1)

  // If the command is known, let's execute it:
  if (commandName in knownCommands) {
    // Retrieve the function by its name:
    const command = knownCommands[commandName]
    // Then call the command with parameters:
    command(target, context, params)
    console.log(`* Executed ${commandName} command for ${context.username}`)
  } else {
    console.log(`* Unknown command ${commandName} from ${context.username}`)
  }
}


// Commands:
// Placeholder Command 1
// Placeholder Command 2

chat.connect().then(() => {
  // ... and then join the channel.
  chat.join(twitchChannels.channels);
  //chat.join(twitchChannels.channels(array.forEach(element => {return})));
});
//client.connect(); // See package.json: "start": "node WaldyBotTwitch.js",. Call "node WaldyBotTwitch.js" to start bot. 