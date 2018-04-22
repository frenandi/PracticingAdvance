const EventEmitter = require("events");

class Logger extends EventEmitter {

}

const logger =  new Logger();

logger.emit("event");

logger.on("event", listenerFunc);