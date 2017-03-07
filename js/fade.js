/**
 * Created by Janaka Dombawela on 3/7/2017.
 */

var Fade = new function (options, callBackFunction) {
    this.options = options;
    this.callBackFunction = callBackFunction;
    var cFunction = this.callBackFunction;

    this.in = function (element) {
        element.style.animationDuration = this.options.duration;
        element.style.animationName = 'fade-in-animation';
        element.style.animationFillMode = 'forwards';
        element.addEventListener('animationend', function () {
            cFunction();
        });
    };
    this.out = function (element) {
        element.style.animationDuration = this.options.duration;
        element.style.animationName = 'fade-out-animation';
        element.style.animationFillMode = 'forwards';
        element.addEventListener('animationend', function () {
            cFunction();
        });
    };
    this.init = function (element) {
        if (this.options.type == 'in') {
            this.in(element);
        } else if (this.options.type == 'out') {
            this.out(element);
        }
    };
    this.start = function () {
        if (this.options.class) {
            var selectors = document.getElementsByClassName(this.options.class);
            for (var i = 0; i < selectors.length; i++) {
                this.init(selectors[i]);
            }
        } else if (this.options.id) {
            var element = document.getElementById(this.options.id);
            this.init(element);
        } else if (this.options.class) {
            var selectors = document.getElementsByTagName(this.options.tag);
            for (var i = 0; i < selectors.length; i++) {
                this.init(selectors[i]);
            }
        }
    };

};