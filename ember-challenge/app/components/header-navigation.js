import Component from '@ember/component';

export default Component.extend({
    isShowingPriceModal: false,
    actions: {
        toggleModal() {
           this.toggleProperty('isShowingPriceModal');
        },
        clickedTranslucentOverlay() {
           return;
        }
    }
});
