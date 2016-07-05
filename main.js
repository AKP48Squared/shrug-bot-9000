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
  var times = {};

  if(text.includes('shrug')) {
    if(times.shrug && new Date().getTime() - times.shrug > 15000) {
      times.shrug = new Date().getTime();
      return context.reply(`¯\\_(ツ)_/¯`);
    }
  }

  if(text.includes('lenny')) {
    if(times.lenny && new Date().getTime() - times.lenny > 15000) {
      times.lenny = new Date().getTime();
      return context.reply(`( ͡° ͜ʖ ͡°)`);
    }
  }

  if(text.includes('lod') || text.includes('disapproval') || text.includes('lookofdisapproval')) {
    if(times.lenny && new Date().getTime() - times.lenny > 15000) {
      times.lenny = new Date().getTime();
      return context.reply(`ಠ_ಠ`);
    }
  }

  if(text.includes('csi') || text.includes('pun') || text.includes('glasses') || text.includes('yeaaaa')) {
    if(times.glasses && new Date().getTime() - times.glasses > 15000) {
      times.glasses = new Date().getTime();
      return context.reply(`(•_•) ( •_•)>⌐■-■ (⌐■_■)`);
    }
  }
};

module.exports = ShrugBot9000;
