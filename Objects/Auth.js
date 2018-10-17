var testAuthNotCommitedFile = require('../testauth');

// Instructions:
// 1. Go to http://twitchapps.com/tmi/ to create an OAuth generated API Key.
// 2. Inside of the below twitchOAuthPasswordObject do the following step #3.
// 3. Copy/paste your key into TwitchOAuthPassword:'s placeholding string 'OAuthTokenPlaceholder'. Overwriting it with your newly generated OAuth key. 
// 4. Inside of the below twitchBotUsernameObject do the following step #5.
// 5. Overwrite TwitchUsername:'s placeholding string 'TwitchUsernamePlaceholder' with your twitch account's username.
// 6. See the below object for even more detailed instructions on how to find your twitch username, etc.  


// Objects
// Twitch Token Object
var twitchOAuthPasswordObject = {
  // (String)
  // This is your bot's twitch account password. Also known as your OAuth token, the one generated in the above "Instructions:". 
  // String is prepended with "oauth:". Following with a bunch of giberish generated code.
  // Example is 'oauth:a1abcde1234ab1alabcdef123abcd1a'
  TwitchOAuthPassword: 'OAuthTokenPlaceholder', // <-- OAuth generated twitch account password goes HERE <------------
}
var twitchBotUsernameObject = {
  // (String)
  // See 'Objects/Media Storage/bot account username how to.png'. To find your bot's twitch USERNAME, not DISPLAYNAME.
  // String is all lowercase, case sensitive.
  TwitchUsername: 'TwitchUsernamePlaceholder', // <-- YOUR account's username (String). See 'Objects/Media Storage/bot account username how to.png'. 
}
var defaultUsername = twitchBotUsernameObject.TwitchUsername;
var defaultPassword = twitchOAuthPasswordObject.TwitchOAuthPassword;
var testAuthNotCommitedLocalUsername = testAuthNotCommitedFile.testerTwitchTokenObject.testTwitchUsername;
var testAuthNotCommitedLocalPassword = testAuthNotCommitedFile.testerTwitchTokenObject.TestTwitchOAuth;

const options = {
  connection: {
      reconnect: true,
      secure: true,
      //cluster: "aws",
      //timeout: Infinity
  },
  options: {
      // Some methods may require a client ID. If needed, provide a client ID below. 
        // Remove the comments "//" in front of the property, and add your respective clientId as its value. 
      //clientId: CLIENT_ID,
      debug: true
  },
  identity: {
    // IF I still commited/released this as my local dev enviroment. Setup as follows: 
    // Overwrite corresponding "testAuthNotCommitedLocalPassword"/"testAuthNotCommitedLocalUsername" with appropriate default.  
      // Default: defaultUsername
      username: testAuthNotCommitedLocalUsername, // <-- YOUR account's username (String). 
      // Default: defaultPassword
      password: testAuthNotCommitedLocalPassword, // <-- YOUR account's OAuth password/password (String).
  },
  channels: ['#hdbeasta'],
};
var currentTwitchUsername = options.identity.username;
var currentTwitchPassword = options.identity.password;
var optionsObjChannelsArray = options.channels; 
var optionsObjChannelsArrayClean = optionsObjChannelsArray.toLocaleString().toLocaleLowerCase().split(',');

var currentTwitchChannels = optionsObjChannelsArrayClean;
var currentChannelString = currentTwitchChannels[0];


// Export Object
var exportObject = {
  defaultUsername,
  defaultPassword,
  testAuthNotCommitedLocalUsername,
  testAuthNotCommitedLocalPassword,
  currentTwitchUsername,
  currentTwitchPassword,
  currentTwitchChannels,
  currentChannelString,
  options,
}
module.exports = exportObject;