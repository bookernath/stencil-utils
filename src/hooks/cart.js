import BaseHooks from './base';

export default class extends BaseHooks {

    /**
     * @Constructor
     */
    constructor() {
        // call parent
        super();

        this.itemAdd();
    }

    itemAdd() {
        this.body.addEventListener('submit', '[data-cart-item-add]', (event) => {
            this.emit('cart-item-add', event, event.target);
        });
    }
}
