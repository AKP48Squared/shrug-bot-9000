'use strict';
class ShrugBot9000 extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'ShrugBot9000');
    this.times = {};
  }
}

ShrugBot9000.prototype.handleCommand = function(context) {
  context.setCustomData('noPrefix', true);

  switch(context.command()) {
    case 'shrug':
      return this.shrug(context);
    case 'lenny':
      return this.lenny(context);
    case 'lod':
    case 'disapproval':
    case 'lookofdisapproval':
      return this.lod(context);
    case 'glasses':
    case 'csi':
      return this.csi(context);
    case 'rl':
    case 'reload':
      return global.AKP48.reload();
    default:
      return;
  }
};

ShrugBot9000.prototype.handleMessage = function (context) {
  var text = context.text().toLowerCase();
  context.setCustomData('noPrefix', true);

  if(text.includes('shrug') && !text.includes('ShrugBot9001')) {
    this.shrug(context);
  }

  if(text.includes('lenny')) {
    this.lenny(context);
  }

  if(text.includes('lod') || text.includes('disapproval') || text.includes('lookofdisapproval')) {
    this.lod(context);
  }

  if(text.includes('csi') || text.includes('yeaaaa')) {
    this.csi(context);
  }
};

ShrugBot9000.prototype.canSend = function (cmd, to) {
  var times = this.times[cmd];
  if(!times) {
    this.times[cmd] = {};
    this.times[cmd][to] = Date.now();
    return true;
  }
  if(!times[to]) {
    this.times[cmd][to] = Date.now();
    return true;
  }
  if(Date.now() - times[to] > 15000) {
    this.times[cmd][to] = Date.now();
    return true;
  }
  return false;
};

ShrugBot9000.prototype.shrug = function (context) {
  if(this.canSend('shrug', context.to())) {
    return context.reply(`¯\\_(ツ)_/¯`);
  }
};

ShrugBot9000.prototype.lenny = function (context) {
  if(this.canSend('lenny', context.to())) {
    return context.reply(`( ͡° ͜ʖ ͡°)`);
  }
};

ShrugBot9000.prototype.lod = function (context) {
  if(this.canSend('lod', context.to())) {
    return context.reply(`ಠ_ಠ`);
  }
};

ShrugBot9000.prototype.csi = function (context) {
  if(this.canSend('csi', context.to())) {
    return context.reply(`(•_•) ( •_•)>⌐■-■ (⌐■_■)`);
  }
};

module.exports = ShrugBot9000;
