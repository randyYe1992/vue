//vue的特性:是渐进式框架,是响应式框架
//所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。
var app1 = new Vue({
	el:"#app1",
	data:{
		message:"中国"
	}
})

var app2 = new Vue({
	el:"#app2",
	data:{
		isOpen:true
	}
})

var app3 = new Vue({
	el:"#app3",
	data:{
		title:"这是一个title"
	}
})
//v-on 指令，它用于监听 DOM 事件：
//v-bind用于绑定元素属性
var app4 = new Vue({
	el:"#app4",
	methods:{
		openDialog:function(){
			alert("hello,Vue");
		}
	}
})
