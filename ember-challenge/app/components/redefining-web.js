import Component from '@ember/component';

export default Component.extend({
    isShowingLearnMoreModal: false,
    actions: {
        toggleModal() {
            this.toggleProperty('isShowingLearnMoreModal');
        },
        clickedTranslucentOverlay() {
           return;
        }
    }
});
