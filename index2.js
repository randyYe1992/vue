var messages = {
	message:'this is a message',
	isDisabled:true
}

var vm = new Vue({
	el:'#app',
	data:messages,
	created:function(){
		 console.log('a is: ' + this.message)
	}
})
vm.$watch('message', function (newValue, oldValue) {
  alert(oldValue+">>>changgeTo>>>"+newValue);
})
var app2 = new Vue({
	el:'#app-2',
	data:messages
})
var app3 = new Vue({
	el:'#app-3',
	data:{
		rawHtml:'<span style="color:red">this should be red </span>'
	}
})
var app4 = new Vue({
	el:'#app-4',
	data:{
		message:0
	},
	methods:{
		addFun:function(){
			return this.message+1;
		}
	},
	computed:{
		addMessage:function(){
			return Date.now();
		}
	}
})