var wdgt = {
    idBox: 'wdgt',
    url_widget: 'http://localhost:8080/pages/widgets/widget.html',
    url_style: 'http://localhost:8080/css/widget.css',

    init: function (id) {
        console.log("Begin Widget initialization");

        if (!id) {
            id = this.idBox;
        }

        if (document.getElementById(id)) {

            this.addStyle();
            try {
                var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
                var xhr = new XHR();
                xhr.open('GET', this.url_widget, true);

                xhr.onload = function () {
                    if (this.response) {
                        document.getElementById(id).innerHTML = this.response;
                    }
                }

                xhr.onerror = function () {
                    console.log('onerror ' + this.status);
                }

                xhr.send();
            } catch (ignore) {
            }
        } else {
            console.log('The specified block id="' + id + '" is missing');
        }
    },

    addStyle: function () {
        style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = this.url_style;
        document.head.appendChild(style);
    }
}