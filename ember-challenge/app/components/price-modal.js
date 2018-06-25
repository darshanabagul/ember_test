import Component from '@ember/component';

export default Component.extend({
    isShowingPriceModal: false,
    actions: {
        toggleModal() {
            this.set('isShowingPriceModal', false);
            this.get('toggleModal')();
        }
    }
});
