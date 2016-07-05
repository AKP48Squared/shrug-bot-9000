'use strict';
class ShrugBot9000 extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'ShrugBot9000');
  }
}

ShrugBot9000.prototype.handleCommand = function (context) {
  global.logger.silly(`${this.name}: Received command.`);

  var command = context.command();
  context.setCustomData('noPrefix', true);

  switch(command) {
    case 'shrug':
      return context.reply(`¯\\_(ツ)_/¯`);
    case 'lenny':
      return context.reply(`( ͡° ͜ʖ ͡°)`);
    case 'lod':
    case 'disapproval':
    case 'lookofdisapproval':
      return context.reply(`ಠ_ಠ`);
    case 'rl':
      return global.AKP48.reload();
  }
};

module.exports = ShrugBot9000;
