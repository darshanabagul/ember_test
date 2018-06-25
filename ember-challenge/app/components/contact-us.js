import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
    isSubmitted: false,

    actions: {
        saveContact() {
            const $form = $('#contactUs');
            const validator = $form.validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 5,
                        maxlength: 30
                    },
                    email: {
                        required: true
                    },
                    phone: {
                        required: true,
                        minlength: 10,
                        maxlength: 10
                    },
                    description: {
                        required: true
                    }
                }
            });
            this.set('form', validator);
            if ($form.valid()) {
                $("#contactUs")[0].reset();
                this.set('isSubmitted', true);
            }
        }
    }
});
