/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console */
// Imported Node Modules
const TwitchJs = require('twitch-js'); // TwitchJS https://www.npmjs.com/package/twitch-js
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
var testAuthNotCommitedFile = require('./testauth.js');


// README: Instructions
// Go to './Objects/Auth.js' to setup YOUR bot's USERNAME + PASSWORD.
  // Alongside the other nessecary authentication setup. Ie twitch channel selection, on joining, etc.

// Dev Notes:
// Youtube guide used: https://www.youtube.com/watch?v=K6N9dSMb7sM
// Some code taken from: https://dev.twitch.tv/docs/irc/. Specifically official Twitch example chatbot. Under "Step:2 Sample Code".
// Twitch IRC guide used: https://blog.bashtech.net/a-guide-to-twitch-irc/
// TwitchJS: 
  // https://twitch-apis.github.io/twitch-js/
  // getting started: https://github.com/twitch-apis/twitch-js/blob/master/docs/HomeGettingStarted.md
  // Also, TwitchJS https://twitch-apis.github.io/twitch-js/docs/getting-started
  // TwitchJS how to setup: https://github.com/twitch-apis/twitch-js/blob/6c2d99d6ed2522cc958d18cb2e1ffe37ce71781b/docs/Examples.md
  // Working example script: https://gist.github.com/JeffreyBodin/31ed9fdafe84535b4d54571c88f895dc.js
// Go here for a reference to the twitch userstate object (Chat users info): https://github.com/twitch-apis/twitch-js/blob/HEAD/docs/Chat/Configuration.md


// Global Vars
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];

const options = globalVarsObjs.authenticationObject.options;
const token = options.identity.password;
const username = options.identity.username;
const twitchJs = new TwitchJs.default({ token, username });

const optionsChannelsArray = globalVarsObjs.authenticationObject.currentTwitchChannels;
  // Note: var currentTwitchChannels = optionsObjChannelsArrayClean;
const channelString = globalVarsObjs.authenticationObject.currentChannelString; 
  // Note: var currentChannelString = currentTwitchChannels[0];


// Global Objects


// STARTUP:
// See package.json to edit startup command. At:""start": "node WaldyBotTwitch.js","
// Default call "node WaldyBotTwitch.js" to start bot in powershell/command prompt etc.. 
twitchJs.chat.connect().then(globalUserState => {
  // JOINING CHANNEL
  twitchJs.chat.join(channelString).then(channelState => {
    console.log(channelState);
    // Do stuff with channelState...
  });
  
  // Logs:
  // Initial Startup Logs
    // PLACERHOLDER DO ADD THE FOLLOWING LIKE USED TO HAVE WITH TMI
    // https://github.com/twitch-apis/twitch-js/blob/master/docs/Chat/Methods.md
  twitchJs.chat.on('JOIN', (channel, userstate, message) => {
    // On chat connection. Msgs logged to console:
    console.log(twitchJs.chat.getChannels()); // Returns: [] pre-channel connection. Returns [ '#hdbeasta' ] post-channel connection.
    //console.log(twitchJs.chat.readyState()); // Returns: "CONNECTING", "OPEN", "CLOSING" or "CLOSED". 
      // Isnt working.
      // Error: .readyState() is aparently not defined/or isnt a function?? 
      // To Do: Find up to date "readyState" function for use here.
    console.log(`v` + waldyBotVersion); // Current version
    console.log(`Ready....`);
    }
  );
  // Continued Logs:
  const log = msg => console.log(msg);
  twitchJs.chat.on(twitchJs.chatConstants.EVENTS.ALL, log); // Return all events. So every chat message is logged, alongside said msg's data. 
  
  // Listen/Log to console incoming flagged chat. (Ie commands)
  //twitchJs.chat.connect().then(responseLog => {
  //  console.log(responseLog);
  //  //console.log(
  //  //  `Message "${message}" received from ${userstate['displayName']}`,
  //  //);
  //});
  
  // IN PROGRESS CONTINUE THIS TOMMORROW......... <------------------------------------- HERE
  twitchJs.chat.on('*', (message, userstate) => {
    // Returns: Message "[object Object]" received from undefined
    console.log(`Message "${message}" received from ${username['displayName']}`);
  });
  twitchJs.chat.on('*', (message, userstate) => {
    // Returns: Message "undefined" received from undefined
    console.log(`Message "${message[message]}" received from ${username['username']}`);
  });

  // Event Handlers: (Defined Below)
  // Listen to '*' (All Messages)
  twitchJs.chat.on('*', (channel, userstate, message) => {
    if (options.identity && message === 'w help') {
      // If an identity was provided, respond in channel with message.
      twitchJs.chat.say(channel, 'Hello world!');
    }
    if (message === 'w help') {
      // If an identity was provided, respond in channel with message.
      twitchJs.chat.say(channel, 'Hello world!');
    }
  });
  // Listen to 'PRIVMSG' (Private Messages)
  twitchJs.chat.on('PRIVMSG', privateMessage => {
    // Do stuff with privateMessage ...
    if (privateMessage === 'w help') {
      // If an identity was provided, respond in channel with message.
      twitchJs.chat.say(channel, 'Hello world!');
    }
    if (privateMessage === 'w help') {
      // If an identity was provided, respond in channel with message.
      twitchJs.chat.say(channel, 'Hello world!');
    }
  });
  twitchJs.chat.on('PRIVMSG', (command, channel, message) => {
    // Do stuff with privateMessage ...
    if (message === 'w help') {
      // If an identity was provided, respond in channel with message.
      twitchJs.chat.say(channel, 'Hello world!');
    }
    if (command === 'w help') {
      // If an identity was provided, respond in channel with message.
      twitchJs.chat.say(channel, 'Hello world!');
    }
  });
  
  // Commands:
  // Event listener that will respond to "w help" messages with: "Hello world!"
    // placeholder
  //twitchJs.chat.on('chat', (channel, userstate, message) => {
  //  if (options.identity && message === 'w help') {
  //    // If an identity was provided, respond in channel with message.
  //    twitchJs.chat.say(channel, 'Hello world!');
  //  }
  //  if(message == '@waldybot') {
  //    twitchJs.chat.say(channel, userstate['displayName'] + " fuck you");
  //  }
  //});
  // Event will repond to 'w help' with a whisper to the user. 
    // placeholder
    //twitchJs.chat.on('*', (message, user) =>{
    //  if(message === 'w help'){
    //    twitchJs.chat.whisper(user, message);
    //  }
    //});
  // Placeholder Command 2
});


// Noted for later how to map and join multi-channels.
//Promise.all(options.channels.map(channel => twitchJs.chat.join(channel)))
//  .then(channelStates => {
//    // Listen to all PRIVMSG
//    chat.on('PRIVMSG', privateMessage => {
//      // Do stuff with privateMessage ...
//    });
//
//    // Listen to PRIVMSG from #dallas ONLY
//    chat.on('PRIVMSG/#dallas', privateMessage => {
//      // Do stuff with privateMessage ...
//    });
//    // Listen to all PRIVMSG from #ronni ONLY
//    chat.on('PRIVMSG/#ronni', privateMessage => {
//      // Do stuff with privateMessage ...
//    });
//  });