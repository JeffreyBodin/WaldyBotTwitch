/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console */
// Imported Node Modules
const TwitchJs = require('twitch-js'); // TwitchJS https://www.npmjs.com/package/twitch-js
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
var testAuthNotCommited = require('./testauth.js');
const defaultIdentityPassword = globalVarsObjs.authenticationObject.authTokenProperty;
const testAuthNotCommitedLocalUsername = testAuthNotCommited.testerTwitchTokenObject.testTwitchUsername;
const testAuthNotCommitedLocalPassword = testAuthNotCommited.testerTwitchTokenObject.TestTwitchOAuth;



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
const twitchJs = new TwitchJs.default({ token, username });

const optionsObjChannelsArray = options.channels; 
const channelsArrayClean = optionsObjChannelsArray.toLocaleString().toLocaleLowerCase().split(',');



// Global Objects
//var channelBotConnect = function () {
//  channelsArrayClean.map(channel => twitchJs.chat.join(channel));
//}
//var botConnect = channelBotConnect();
//  console.log(channelBotConnect, botConnect);



// Testing Array Area 
// Testing Channel Obj
//var optionsTestingObject = {
//  channels: ['#hdbeasta', '#waldy713'],
//};
//var channelsGlobalArrayTesting = optionsTestingObject.channels; 
//var channelGlobalTesting = channelsGlobalArrayTesting.map(
//  channel =>
//    new Channels(channel)
//  ,
// function Channels(channelString) {
//    this.channel = channelString;
//  }
//);


/*
// Note: Registers the event handlers. (Defined Below)
// Event listener that will respond to "!command" messages with: "Hello world!"




*/



// STARTUP:
// See package.json to edit startup command. At:""start": "node WaldyBotTwitch.js","
// Default call "node WaldyBotTwitch.js" to start bot in powershell/command prompt etc.. 
twitchJs.chat.connect().then(globalUserState => {
  
  // JOINING CHANNEL
  twitchJs.chat.join(optionsObjChannelsArray[0]).then(channelState => {
    // Do stuff with channelState...
  })


  // Startup Logs
  twitchJs.chat.on('JOIN', (channel, userstate, message, self) => {
    // On chat connection. Msgs logged to console:
    twitchJs.chat.on('GLOBALUSERSTATE', message => {
      console.log(message);
    });
    console.log(`v` + waldyBotVersion); // Current version
    console.log(`Ready....`);
    }
  );
  
  
  // Event Handlers:
  // Listen to all messages
  twitchJs.chat.on('*', message => {
    // Do stuff with message ...
  })

  // Listen to PRIVMSG
  twitchJs.chat.on('PRIVMSG', privateMessage => {
    // Do stuff with privateMessage ...
  })

  twitchJs.chat.on('chat', (channel, userstate, message, self) => {
    console.log(
      `Message "${message}" received from ${userstate['username']}`,
    );
    //if (self) return; // Placeholder
    if (options.identity && message === 'w help') {
      // If an identity was provided, respond in channel with message.
      twitchJs.chat.say(channel, 'Hello world!');
    }
    if(message == '@waldybot') {
      console.log(channel);
      twitchJs.chat.say(channel, userstate['username'] + " fuck you");
      //client.action(channel = "hdbeasta", userstate['username'] + " fuck you");
    }
  });
  // Commands:
  // Placeholder Command 1
  //twitchJs.chat.connect().then(helpCommand => {
  //  //if (self) return;
  //  console.log(
  //    `Message "${message}" received from ${userstate['display-name']}`,
  //  );
  //
  // twitchJs.chat.on('*', (message, user) =>{
  //    if(message === 'w help'){
  //      twitchJs.chat.  whisper(user, message);
  //    }
  //  });  
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