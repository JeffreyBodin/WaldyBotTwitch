// Command Vars + Command Var's Help Descriptions
var cmdHelp = 'w ' + 'help';
var cmdHelpHelp = 'w help\n\t ' + 'Requests my command list.';
var cmdSetUp = 'w ' + 'setup';
var cmdSetUpHelp = 'w setup help\n\t ' + 'Requests my setup information.';
var cmdSetUpInstallHelp = 'w setup\n\t ' + 'Requests my server authentication url. Used by server owners/admins.\n\t ' + 'Go to the recieved url to add me to your server.';
var cmdPing = 'w ' + 'ping';
var cmdPingHelp = 'w ping\n\t ' + 'Checks my current online/offline status.';
var cmdCoolAscii = 'w ' + 'ascii';
var cmdCoolAsciiPlusHelp = 'w ' + 'ascii help\n\t ' + 'Returns Ascii command list.';
var cmdCoolAsciiHelp = '```javascript\n' + '// Ascii command list.\n ' + 'w ascii\n\t ' + 'Returns an Ascii face.ヽ༼ຈل͜ຈ༽ﾉ\n ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n ' + 'Keywords:\n\t ' + '@mention\n\t ' + 'deal with it\n\t ' + 'raise your dongers\n\t ' + 'syphilis\n\t ' + '$\n\t ' + 'mo money\n\t ' + 'hadouken\n\t ' + 'dongerhood\n\t ' + 'die a dodger\n\t ' + 'feeding\n\t ' + '```';
var cmdCopyPasta = 'w ' + 'copypasta';
var cmdCopyPastaHelp = 'w copypasta\n\t ' + 'Returns copypastas.\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: im syliris';
var cmdYoutube = 'w ' + 'yt';
var cmdYoutubeHelp = 'w yt\n\t ' + 'Returns Youtube videos.\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: s, boneless pizza\n\t ' + 'To search youtube enter postfixed query following the s keyword and a single space.';
var cmdLinks = 'Links:\n\t ' + 'GitHub: https://github.com/JeffreyBodin/WaldyBot\n\t ' + 'Website: https://jeffreybodin.github.io/WaldyBot';
var cmdContactInformation = 'Contact Information:\n\t ' + 'Official Discord Server: https://discord.gg/bpc6cYg\n\t ' + 'For any/all other contact needs message me on discord: waldy713#1468';
// Help Files
var helpFile = '```javascript\n' + '// This is my command list.\n ' + 'All commands are prefixed by a \'w\' and a single space.\n ' + cmdHelpHelp + '\n ' + cmdSetUpHelp + '\n ' + cmdPingHelp + '\n ' + cmdCoolAsciiPlusHelp + '\n ' + cmdCopyPastaHelp + '\n ' + '\n ' + cmdLinks + '\n ' + cmdContactInformation + '\n ' + '```';
var setUpFile = '```javascript\n' + '// This is my setup information.\n ' + 'All commands are prefixed by a \'w\' and a single space along with setup keyword.\n ' + cmdSetUpHelp + '\n ' + cmdSetUpInstallHelp + '\n ' + '```';

// Objects
var cmdVarObject = {
    cmdHelp: cmdHelp,
    cmdHelpHelp:cmdHelpHelp,
    cmdSetUp: cmdSetUp,
    cmdSetUpHelp: cmdSetUpHelp,
    cmdSetUpInstallHelp: cmdSetUpInstallHelp, 
    cmdPing: cmdPing,
    cmdPingHelp: cmdPingHelp,
    cmdCoolAscii: cmdCoolAscii,
    cmdCoolAsciiHelp: cmdCoolAsciiHelp,
    cmdCopyPasta: cmdCopyPasta,
    cmdCopyPastaHelp: cmdCopyPastaHelp,
    cmdYoutube: cmdYoutube,
    cmdYoutubeHelp: cmdYoutubeHelp
}
var helpFilesObject = {
    helpFile: helpFile,
    setUpFile: setUpFile
}
var exportObject = {
    cmdVarObject: cmdVarObject,
    helpFilesObject: helpFilesObject
}



module.exports = exportObject;
