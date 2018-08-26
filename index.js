var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
app.message='vue starter';

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString(),
	seen:false
  }
})

var app3 = new Vue({
	el:'#app-3',
	data:{
		message:'要做的事',
		todos:[
			{text:'spring',age:12},
			{text:'Vue'},
			{text:'微服务'},
			{text:'ibatis'}
		]
	}
})
var app4 = new Vue({
	el:'#app-4',
	data:{
		message:'通过点击按钮改变内容',
		iptValue:'init'
	},
	methods:{
		changeContent:function(){
			this.message='文本内容改变了';
		}
	}
})
Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})
var app5 = new Vue({
	el:'#app-5',
	data:{
		groceryList: [
		  { id: 0, text: '蔬菜' },
		  { id: 1, text: '奶酪' },
		  { id: 2, text: '随便其它什么人吃的东西' }
		]
	}
})

















