import BaseHooks from './base';

export default class extends BaseHooks {

    /**
     * @Constructor
     */
    constructor() {
        // call parent
        super();

        this.sortByEvents();
    }

    sortByEvents() {
        this.body.addEventListener('submit', '[data-sort-by]', (event) => {
            this.emit('sortBy-submitted', event);
        });

        this.body.addEventListener('change', '[data-sort-by] select', (event) => {
            this.emit('sortBy-select-changed', event);

            if (! event.isDefaultPrevented()) {
                const form = document.querySelectorAll(event.currentTarget).closest('form').trigger('submit');
                const e = document.createEvent('HTMLEvents');
                e.initEvent('submit', false, true);
                form.dispatchEvent(e);
            }
        });
    }
}
