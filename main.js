'use strict';
class ShrugBot9000 extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'ShrugBot9000');
  }
}

ShrugBot9000.prototype.handleCommand = function(context) {
  if (context.command === 'rl') {
    return global.AKP48.reload();
  }
};

ShrugBot9000.prototype.handleMessage = function (context) {
  var text = context.text().toLowerCase();
  context.setCustomData('noPrefix', true);

  if(text.includes('shrug')) {
    return context.reply(`¯\\_(ツ)_/¯`);
  }

  if(text.includes('lenny')) {
    return context.reply(`( ͡° ͜ʖ ͡°)`);
  }

  if(text.includes('lod') || text.includes('disapproval') || text.includes('lookofdisapproval')) {
    return context.reply(`ಠ_ಠ`);
  }

  if(text.includes('csi') || text.includes('pun') || text.includes('glasses') || text.includes('yeaaaa')) {
    return context.reply(`(•_•) ( •_•)>⌐■-■ (⌐■_■)`);
  }
};

module.exports = ShrugBot9000;
