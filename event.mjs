import {EventEmitter} from 'events';

const emmiter = new EventEmitter();

emmiter.on("hai", (name) => {
  console.info(`halo ${name}`);
});

emmiter.on("hai", (name) => {
  console.info(`halo ${name}`);
});

emmiter.emit("hai", "wawa");