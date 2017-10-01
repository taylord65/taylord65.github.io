var routes = [
  { path: '/soccer1', component: Soccer1 },
  { path: '/saildrone', component: Saildrone },
  { path: '/', component: Home }
];

var router = new VueRouter({
	routes: routes
});