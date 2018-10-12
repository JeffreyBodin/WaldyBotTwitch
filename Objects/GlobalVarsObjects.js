var authFile = require('./Auth.js');

// Global Vars

// Command Vars + Command Var's Help Descriptions

// Help Files - Contains strings that are DM'd to user on request for help.

// Authentication
var authToken = authFile.twitchTokenObject.TwitchOAuth;

// Objects
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

var authenticationObject = {
  authToken: authToken
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