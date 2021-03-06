// ---
//
// command: ping(client, message, args)
//
// Bread and butter for Discord bots, virtually
// a "Hello, World!"
//
// --
//
// Parameters
//
// - client (Discord.Client()) : The main
// bot client, allows us to communicate
// with Discord's API.
//
// - message (Message) : Represents a message on Discord.
//
// - args (Array) : An array containing arguments
// called by the message's author.
//
// --
//
// Example
//
//  => a!ping
//
// ---

exports.run = async (client, message, args) => {
 message.channel.send('pong!');
}

// Provides useful information about this command.
exports.help = {
 name: 'ping',
 category: 'core',
 description: 'Pings then pongs.',
 usage: 'a!ping'
};

// Provides configeration use for
// this commands, like useful properties such
// as permission levels.
exports.config = {
 permissionLevel: 0,
 requiredRole: "Guests",
 guildOnly: false
};
