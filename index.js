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
			{text:"学习牛的项目,"}
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
// 定义名为 todo-item 的新组件
//我们应该能从父作用域将数据传到子组件才对。让我们来修改一下组件的定义，使之能够接受一个 prop
Vue.component('todo-item', {
	props:['todo'],
	template: '<li>{{todo.text}}</li>'
})
var app6 = new Vue({
	el:"#app7",
	data:{
		groceryList:[
			{id:1,text:"水蜜桃"},
			{id:2,text:"苹果"},
			{id:3,text:"西红柿"}
		]
	}
})
/**
 * 
尽管这只是一个刻意设计的例子，但是我们已经设法将应用分割成了两个更小的单元。子单元通过 prop 接口与父单元进行了良好的解耦。
我们现在可以进一步改进 <todo-item> 组件，提供更为复杂的模板和逻辑，而不会影响到父单元。
在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理
。在后续教程中我们将详述组件，不过这里有一个 (假想的) 例子，以展示使用了组件的应用模板是什么样的：
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
 */

//生命周期钩子的函数
var app7 = new Vue({
	data:{
		message:"app7 is created"
	},
	created:function(){
	//	alert(this.message);
	}
})
//vue 的生命周期,随着不断的学习,你会发现对vue的生命的理解很有必要
