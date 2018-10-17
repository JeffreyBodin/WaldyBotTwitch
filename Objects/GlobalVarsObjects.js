// WALDY_BOT_TWITCH
// Imported Modules/Files
var authFile = require('./Auth.js');
var testAuthNotCommitedFile = require('../testauth');
var helpObjs = require('./HelpObjects.js');
//var asciiObjs = require('./ASCIIObjects.js');
//var copyPastaObjs = require('./CopyPastaObjects.js');
//var youtubeObjs = require('./YoutubeObjects.js');

// Global Vars
var waldyBot = authFile.waldyBot;
var waldyBotBeta = authFile.waldyBotBeta;

// Command Vars + Command Var's Help Descriptions
var cmdHelp = helpObjs.cmdVarObject.cmdHelp;
var cmdHelpHelp = helpObjs.cmdVarObject.cmdHelpHelp;
var cmdSetUp = helpObjs.cmdVarObject.cmdSetUp;
var cmdSetUpHelp = helpObjs.cmdVarObject.cmdSetUpHelp;
var cmdSetUpInstallHelp = helpObjs.cmdVarObject.cmdSetUpInstallHelp;
//var cmdPing = helpObjs.cmdVarObject.cmdPing;
//var cmdPingHelp = helpObjs.cmdVarObject.cmdPingHelp;
//var cmdCoolAscii = helpObjs.cmdVarObject.cmdCoolAscii;
//var cmdCoolAsciiHelp = helpObjs.cmdVarObject.cmdCoolAsciiHelp;
//var cmdCopyPasta = helpObjs.cmdVarObject.cmdCopyPasta;
//var cmdCopyPastaHelp = helpObjs.cmdVarObject.cmdCopyPastaHelp;
//var cmdYoutube = helpObjs.cmdVarObject.cmdYoutube;
//var cmdYoutubeHelp = helpObjs.cmdVarObject.cmdYoutubeHelp;

// Help Files - Contains strings that are DM'd to user on request for help.
var helpFile = helpObjs.helpFilesObject.helpFile;
var setUpFile = helpObjs.helpFilesObject.setUpFile;

// Authentication
var defaultUsername = authFile.defaultUsername;
var defaultPassword = authFile.defaultPassword; 
var testAuthNotCommitedLocalUsername = authFile.testAuthNotCommitedLocalUsername || testAuthNotCommitedFile.testerTwitchTokenObject.testTwitchUsername; 
var testAuthNotCommitedLocalPassword = authFile.testAuthNotCommitedLocalPassword || testAuthNotCommitedFile.testerTwitchTokenObject.TestTwitchOAuth;
var currentTwitchUsername = authFile.currentTwitchUsername;
var currentTwitchPassword = authFile.currentTwitchPassword;
var currentTwitchChannels = authFile.currentTwitchChannels;
var currentChannelString = authFile.currentChannelString;
var options = authFile.options;

// Objects
var authenticationObject = {
  defaultUsername: defaultUsername,
  defaultPassword: defaultPassword,
  testAuthNotCommitedLocalUsername: testAuthNotCommitedLocalUsername,
  testAuthNotCommitedLocalPassword: testAuthNotCommitedLocalPassword,
  currentTwitchUsername: currentTwitchUsername,
  currentTwitchPassword: currentTwitchPassword,
  currentTwitchChannels: currentTwitchChannels,
  currentChannelString: currentChannelString,
  options: options, 
}

var globalVarObject = {
  // Placeholder
  //waldyBot: waldyBot,
  //waldyBotBeta: waldyBotBeta
}

var filesObject = {
  // Placeholder
  //helpFile: helpFile,
  //setUpFile: setUpFile
}

var otherObject = {
  // Placeholder
  //asciiObjs: asciiObjs.asciiObject,
  //copyPastaObjs: copyPastaObjs.copyPastaObject,
  //youtubeObjs: youtubeObjs.youtubeVideoObjects,
}


var commandVarObject = {
  // Placeholder
  //cmdHelp: cmdHelp,
  //cmdHelpHelp: cmdHelpHelp,
  //cmdSetUp: cmdSetUp,
  //cmdSetUpHelp: cmdSetUpHelp,
  //cmdSetUpInstallHelp: cmdSetUpInstallHelp,
  //cmdPing: cmdPing,
  //cmdPingHelp: cmdPingHelp,
  //cmdCoolAscii: cmdCoolAscii,
  //cmdCoolAsciiHelp: cmdCoolAsciiHelp,
  //cmdCopyPasta: cmdCopyPasta,
  //cmdCopyPastaHelp: cmdCopyPastaHelp, 
  //cmdYoutube: cmdYoutube,
  //cmdYoutubeHelp: cmdYoutubeHelp 
}

var exportObject = {
  globalVarObject: globalVarObject, // Placeholder
  filesObject: filesObject, // Placeholder
  otherObject: otherObject, // Placeholder
  authenticationObject: authenticationObject,
  commandVarObject: commandVarObject // Placeholder
}
module.exports = exportObject;