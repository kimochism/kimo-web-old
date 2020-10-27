import Vue from 'vue';
import App from './App.vue';

import router from './router';

import VueCarousel from 'vue-carousel';
import VueMaterial from 'vue-material';
import Mask from 'vuejs-mask';
import Toast from 'vue-toasted';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);
Vue.use(VueCarousel);
Vue.use(Mask);
Vue.use(Toast, {
	position: 'bottom-right',
	duration: 3000,
	keepOnHover: true,
	theme: 'toasted-primary',
	className: 'custom-toast',
});

// Vue.material.theming.default.primary = "#000000";

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
