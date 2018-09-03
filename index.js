//vue的特性:是渐进式框架,是响应式框架
//所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。
var app1 = new Vue({
	el:"#app1",
	data:{
		message:"hello,vue"
	}
})
var app2 = new Vue({
	el:"#app2",
	data:{
		message:"页面加载于"+new Date().toLocaleString()
	}
})
var app3 = new Vue({
	el:"#app3",
	data:{
		seen:true
	}
})
var app4 = new Vue({
	el:"#app4",
	data:{
		todos:[
			{text:"学习vue"},
			{text:"学习springcloud微服务实战"},
			{text:"学习牛的项目"}
		]
	}
})
var app5 = new Vue({
	el:"#app5",
	data:{
		message:"HEllo,Vue,很高心见到你"
	},
	methods:{
		releaseMessage:function(){
			 this.message=this.message.split("").reverse().join('');
		}
	}
})
//v-model 实现表单输入和应用状态的双向绑定
var app6 = new Vue({
	el:"#app6",
	data:{
		message:"this is a message"
	}
})