'use strict';
class ShrugBot9000 extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'ShrugBot9000');
    this.times = {};
  }
}

ShrugBot9000.prototype.handleCommand = function(context) {
  if (context.command() === 'rl') {
    return global.AKP48.reload();
  }
};

ShrugBot9000.prototype.handleMessage = function (context) {
  var text = context.text().toLowerCase();
  context.setCustomData('noPrefix', true);
  var times = this.times;

  if(text.includes('shrug') && !text.includes('ShrugBot9001')) {
    if((times.shrug && new Date().getTime() - times.shrug > 15000) || !times.shrug) {
      times.shrug = new Date().getTime();
      return context.reply(`¯\\_(ツ)_/¯`);
    }
  }

  if(text.includes('lenny')) {
    if((times.lenny && new Date().getTime() - times.lenny > 15000) || !times.lenny) {
      times.lenny = new Date().getTime();
      return context.reply(`( ͡° ͜ʖ ͡°)`);
    }
  }

  if(text.includes('lod') || text.includes('disapproval') || text.includes('lookofdisapproval')) {
    if((times.lod && new Date().getTime() - times.lod > 15000) || !times.lod) {
      times.lod = new Date().getTime();
      return context.reply(`ಠ_ಠ`);
    }
  }

  if(text.includes('csi') || text.includes('yeaaaa')) {
    if((times.glasses && new Date().getTime() - times.glasses > 15000) || !times.glasses) {
      times.glasses = new Date().getTime();
      return context.reply(`(•_•) ( •_•)>⌐■-■ (⌐■_■)`);
    }
  }
};

module.exports = ShrugBot9000;
