define(function (require) {
    var Backbone = require('backbone');
    var Handlebars = require('handlebars');
    var $ = require('jquery');
    var _ = require('underscore');

    var ModalView = require('js/views/ModalView');

    var stackTrace = require('text!js/templates/system/stackTrace.hbs');


    return ModalView.extend({
        initialize: function (json) {
            this.opts = {
                title: 'Result of API',
                body: new Handlebars.SafeString('<pre><code>' +
                    _.escape(JSON.stringify(json, null, '  ')) +
                    '</code></pre>')
            }
        }
    });
})
;