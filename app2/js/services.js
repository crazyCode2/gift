angular.module('tongzhou.services',[])
.service('homeService',['$http',function($http){
	$http.get('http://api.liwushuo.com/v2/banners?channel=iOS')//通过$http 请求banner 数据
	.success(function(data){//数据请求成功执行的方法
		alert('数据请求成功');
	})
	.error(function(error){//数据请求失败执行的方法
		alert('数据请求失败');
	})
}])
