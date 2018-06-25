import Component from '@ember/component';

export default Component.extend({
	isShowingLearnMoreModal: false,
    actions: {
        toggleModal() {
            this.set('isShowingLearnMoreModal', false);
            this.get('toggleModal')();
        }
    }
});
