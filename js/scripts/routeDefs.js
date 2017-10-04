var routes = [
  { path: '/soccer1', component: Soccer1, name: 'Soccer-1' },
  { path: '/saildrone', component: Saildrone, name:'Saildrone' },
  { path: '/fifthlight', component: Fifthlight, name: 'Fifthlight' },
  { path: '/teabot', component: Teabot, name: 'teaBot'},
  { path: '/', component: Home, name: 'home' }
];

var router = new VueRouter({
	routes: routes
});