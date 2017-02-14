/* 
* @Author: anchen
* @Date:   2017-02-14 23:47:36
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-15 04:00:47
*/
(function(app) {
    app
    .controller('homeCtrl',['$scope','myFactory','$state','$rootScope',function ($scope,myFactory,$state,$rootScope) {//注入服务名称
        console.log('Hello Wrold!');
        $scope.views = {
            slideData: [
                {
                    img: '../img/appCode.png'
                },
                {
                    img: '../img/atom.png'
                },
                {
                    img: '../img/bbedit.png'
                }
            ],
            listData: [],
            getList: function() {
                myFactory.getList().then(
                    function(res) {
                        if(res.status === 200 && res.data) {
                            $scope.views.listData = res.data.records;
                            console.log($scope.views.listData);
                         }
                    },
                    function(res) {
                        console.log('接口请求失败');
                    }
                );
            },
            goDetail: function(item) {
                //console.log(111111111)
                console.log(item);
                $state.go('detail');
                $rootScope.detail = item;
            }
        };
        //console.log(1111);//调用服务里面的方法
        $scope.views.getList();

        // myFactory.getList().then(function(data) {
        //     console.log(data);
        // });
    }]);
})(app);