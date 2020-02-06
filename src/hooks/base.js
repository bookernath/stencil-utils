import EventEmitter from 'eventemitter3';

export default class extends EventEmitter {
    constructor() {
        super();
        this.body = document.body;
    }
}
