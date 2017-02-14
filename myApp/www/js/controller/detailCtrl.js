/* 
* @Author: anchen
* @Date:   2017-02-15 03:27:27
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-15 04:04:15
*/
(function(app) {
    app 
        .controller('detailCtrl',['$scope','$rootScope',function($scope,$rootScope) {
            $scope.views = {
                detail: $rootScope.detail,
                goBack: function() {
                    window.history.back();
                }
            };
        }]);
})(app);