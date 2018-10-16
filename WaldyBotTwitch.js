/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console */
// Imported Node Modules
const TwitchJs = require('twitch-js'); // TwitchJS https://www.npmjs.com/package/twitch-js
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
var testAuthNotCommited = require('./testauth.js');
const defaultIdentityPassword = globalVarsObjs.authenticationObject.authTokenProperty;
const testAuthNotCommitedLocalUsername = testAuthNotCommited.testerTwitchTokenObject.testTwitchUsername;
const testAuthNotCommitedLocalPassword = testAuthNotCommited.testerTwitchTokenObject.TestTwitchOAuth;
const options = {
  connection: {
      reconnect: true,
      secure: true,
      //cluster: "aws",
      //timeout: Infinity
  },
  options: {
    // Some methods may require a client ID. If needed, please provide a
    // client ID below.
    // clientId: CLIENT_ID,
      debug: true
  },
  identity: {
      username: testAuthNotCommitedLocalUsername, // <-- YOUR account's username (String). See 'Objects/Media Storage/bot account username how to.png'. 
      // Default: defaultIdentityPassword
      // IF I still commited as my local enviroment. Setup for default as follows: 
      // Overwrite: testAuthNotCommitedLocalPassword With: defaultIdentityPassword
      password: testAuthNotCommitedLocalPassword, // <-- OAuth password. See Objects/Auth.js for detailed instructions on key generation + Auth.js setup. 
  },
  channels: ['#hdbeasta'],
};
const token = options.identity.password;
const username = options.identity.username;
const client = new TwitchJs.default({ token, username });
//function twitchJSClientFunction() {
//  let twitchJSArg = TwitchJS;
//  let twitchJSArgClient = twitchJSArg.Client;
//  let optionArgObj = options;
//  let twitchJSConstructor = new twitchJSArgClient(optionArgObj);
//  return twitchJSConstructor;
//}
//const client = new twitchJSClientFunction;
//const client = new {
//  twitchJSClientParam: TwitchJSLoad.Client(options),
//};


// Notes:
// Youtube guide used: https://www.youtube.com/watch?v=K6N9dSMb7sM
// Some code taken from: https://dev.twitch.tv/docs/irc/. Specifically official Twitch example chatbot. Under "Step:2 Sample Code".
// Twitch IRC guide used: https://blog.bashtech.net/a-guide-to-twitch-irc/
// TwitchJS: 
  // https://twitch-apis.github.io/twitch-js/
  // getting started: https://github.com/twitch-apis/twitch-js/blob/master/docs/HomeGettingStarted.md
  // Also, TwitchJS https://twitch-apis.github.io/twitch-js/docs/getting-started
  // TwitchJS how to setup: https://github.com/twitch-apis/twitch-js/blob/6c2d99d6ed2522cc958d18cb2e1ffe37ce71781b/docs/Examples.md
  // Working example script: https://gist.github.com/JeffreyBodin/31ed9fdafe84535b4d54571c88f895dc.js
// Go here for a reference to the userstate object (Chat users info): https://github.com/twitch-apis/twitch-js/blob/HEAD/docs/Chat/Configuration.md



// Global Vars
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];


// Global Objects



// Startup
// TMI REDO
client.on('connected', (addr, port) => {
    // On chat connection. Msgs logged to console:
    //console.log('Address:' + addr); // Connected address
    //console.log('Port:' + port); // Connected port
    //console.log(``+ client.getUsername()); // placeholder. Logs variation of 'justinfan + #####'. ERROR?? 
    //console.log(``+ client.getChannels()); // placeholder. Logs blankspace.
    //console.log(``+ client.readyState()); // Logs 'OPEN'? Returns one of the following states: "CONNECTING", "OPEN", "CLOSING" or "CLOSED".
    //console.log(`v` + waldyBotVersion); // Current version
    //console.log(`Ready....`);

    //console.log(client.getOptions());
    //console.log(client.getUsername());
  }
);


// Event Handlers:
// Note: Registers the event handlers. (Defined Below)
// Event listener that will respond to "!command" messages with: "Hello world!"
client.on('chat', (channel, userstate, message, self) => {
  console.log(
    `Message "${message}" received from ${userstate['display-name']}`,
  );

  // Do not repond if the message is from the connected identity.
  if (self) return;

  if (options.identity && message === '!command') {
    // If an identity was provided, respond in channel with message.
    client.say(channel, 'Hello world!');
  }
  if(message == '@waldybot') {
    console.log(channel);
    //client.action(channel = "carc1nogen", userstate['username'] + " fuck you");
    //client.action(channel = "hdbeasta", userstate['username'] + " fuck you");
  }
});


// TESTTEST
  // Get featured streams. Doesn't work, fix.
  //api.get('streams/featured').then(response => {
  //  console.log(response)
  //});
  // Listen to all events. Doesn't work, fix.
  //const log = msg => console.log(msg);
  //client.on(chatConstants.EVENTS.ALL, log);


// Commands:
// Placeholder Command 1
// Placeholder Command 2


client.connect(); // See package.json: "start": "node WaldyBotTwitch.js",. Call "node WaldyBotTwitch.js" to start bot. 