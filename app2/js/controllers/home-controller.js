angular.module('home-controller',[])
.controller('HomeCtrl',['$scope','$timeout','$ionicSlideBoxDelegate',function($scope,$timeout,$ionicSlideBoxDelegate){
	//请求轮播图数据
	
	//轮播图
	$timeout(function () {
        $scope.banners = [
            'img/001.jpg',
            'img/002.jpg',
            'img/003.jpg'
        ];
        $ionicSlideBoxDelegate.update();//更新ionic SlideBox
        $ionicSlideBoxDelegate.$getByHandle("slideBox").loop(true);

    }, 300);
}]);
