'use strict';
class ShrugBot9000 extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'ShrugBot9000');
    if(!global.shrugTimes) {
      global.shrugTimes = {};
    }
    this.data = require('./shrug.json');
  }
}

ShrugBot9000.prototype.handleCommand = function(context) {
  context.setCustomData('noPrefix', true);
  if(this.data[context.command()]) {
    return this.reply(context.command(), this.data[context.command()].replace('{text}', context.argText()), context);
  }

  switch(context.command().toLowerCase()) {
    case 'rl':
    case 'reload':
      return global.AKP48.reload();
    default:
      return;
  }
};

ShrugBot9000.prototype.handleMessage = function (context) {
  context.setCustomData('noPrefix', true);
  var text = context.text().toLowerCase().split(' ');
  var sendCount = 0;
  
  for (var i = 0; i < text.length && sendCount < 2; i++) {
    if(this.data[text[i]] && !this.data[text[i]].includes('{text}')) {
      this.reply(text[i], this.data[text[i]], context);
      sendCount++;
    }
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

ShrugBot9000.prototype.reply = function (cmd, msg, context) {
  if(this.canSend(cmd, context.to())) {
    return context.reply(msg);
  }
};

module.exports = ShrugBot9000;
