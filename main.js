'use strict';
class ShrugBot9000 extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'ShrugBot9000');
    if(!global.shrugTimes) {
      global.shrugTimes = {};
    }
  }
}

ShrugBot9000.prototype.handleCommand = function(context) {
  context.setCustomData('noPrefix', true);

  switch(context.command().toLowerCase()) {
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
  var text = context.text().toLowerCase().split(' ');
  context.setCustomData('noPrefix', true);
  var responses = [];

  for (var i = 0; i < text.length; i++) {
    if(text.includes('shrug') && !text.includes('ShrugBot9001')) {
      responses.push('shrug');
    }

    if(text.includes('lenny')) {
      responses.push('lenny');
    }

    if(text.includes('lod') || text.includes('disapproval') || text.includes('lookofdisapproval')) {
      responses.push('lod');
    }

    if(text.includes('csi') || text.includes('yeaaaa')) {
      responses.push('csi');
    }
  }

  for (var i = 0; i < responses.length; i++) {
    this[responses[i]](context);
  }
};

ShrugBot9000.prototype.canSend = function (cmd, to) {
  var times = global.shrugTimes[cmd];
  if(!times) {
    global.shrugTimes[cmd] = {};
    global.shrugTimes[cmd][to] = Date.now();
    return true;
  }
  if(!times[to]) {
    global.shrugTimes[cmd][to] = Date.now();
    return true;
  }
  if(Date.now() - times[to] > 15000) {
    global.shrugTimes[cmd][to] = Date.now();
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
