angular.module('tongzhou', ['ionic', 'tongzhou.controllers', 'tongzhou.services'])

    .run(['$ionicPlatform',function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            //通过ionicPlatform 检测设备是ios 还是 Android
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    }])

    .config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

        //配置全局风格
		$ionicConfigProvider.platform.ios.tabs.style('standard');
		$ionicConfigProvider.platform.android.tabs.style('standard');
		//tabs的位置
		$ionicConfigProvider.platform.ios.tabs.position('bottom');
		$ionicConfigProvider.platform.android.tabs.position('bottom');
		//title字体居中
		$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
		$ionicConfigProvider.platform.android.navBar.alignTitle('center');
		//设置返回按钮没有文字
		$ionicConfigProvider.platform.android.backButton.previousTitleText('');
		$ionicConfigProvider.platform.ios.backButton.previousTitleText('');


        //设置路由其他情况显示
        $urlRouterProvider.otherwise('login');
		//进行路由配置
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract:true,
                //模板路径
                templateUrl: 'templates/tabs.html'
            })

            //登录页
            .state('login',{
                url:'/login',
                templateUrl:'templates/login/login.html',
                controller:'LoginCtrl'
            })

            //注册页
            .state('register',{
                url:'/register',
                templateUrl:'templates/register/register.html',
                controller:'RegisterCtrl'
            })
			.state('register2',{
				url:'/register',
				templateUrl:'templates/register/register2.html',
				controller:'RegisterCtrl'
			})
			.state('register3',{
				url:'/register',
				templateUrl:'templates/register/register3.html',
				controller:'RegisterCtrl'
			})

            //首页
            .state('tab.home',{
                url:'/home',
                views:{
                    'tab-home':{
                        templateUrl:'templates/home/tab-home.html',
                        controller:'HomeCtrl'
                    }
                }

            })            
            //信息
            .state('tab.message',{
                url:'/message',
                views:{
                    'tab-message':{
                        templateUrl:'templates/message/tab-message.html',
                        controller:'MessageCtrl'
                    }
                }

            })
            //个人中心
            .state('tab.personal',{
                url:'/personal',
                views:{
                    'tab-personal':{
                        templateUrl:'templates/personal/tab-personal.html',
                        controller:'PersonalCtrl'
                    }
                }

            })
    }]);
