window.Popper = require("popper.js").default;
window.$ = window.jQuery = require("jquery");

require("bootstrap");
require("@fortawesome/fontawesome-free");

window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Credentials": "true"
};
/*let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}*/

/*import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: true
});*/

// import './assets/js/categories_custom';
// import './assets/js/contact_custom';
// import './assets/js/single_custom';
// import "./assets/js/custom";

require("./assets/js/plugins/Isotope/isotope.pkgd.min.js");
// import "./assets/js/plugins/OwlCarousel2-2.2.1/owl.carousel.js";
// import "./assets/js/plugins/easing/easing.js";
// import './assets/js/';
// import './assets/js/';
