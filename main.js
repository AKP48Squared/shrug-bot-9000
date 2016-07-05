'use strict';
class ShrugBot9000 extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'ShrugBot9000');
  }
}

ShrugBot9000.prototype.handleCommand = function (context) {
  global.logger.silly(`${this.name}: Received command.`);

  var command = context.command();

  if(command === "shrug") {
    return context.reply('¯\\_(ツ)_/¯');
  }
};

module.exports = ShrugBot9000;
