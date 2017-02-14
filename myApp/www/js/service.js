/* 
* @Author: anchen
* @Date:   2017-02-14 23:43:48
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-15 01:36:20
*/
(function(app){
    app 
        .factory('myFactory',['$http','$q',function($http,$q) {
            var factory = {};

            factory.getList = function() {
                return $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php")
            };
            return factory;
        }])
})(app);