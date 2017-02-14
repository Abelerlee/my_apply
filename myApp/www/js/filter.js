/* 
* @Author: anchen
* @Date:   2017-02-14 23:43:23
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-15 03:21:42
*/
(function(app) {
    app 
       .filter('toUpperCaseText',function() {
            return function (x) {
                if(x){
                    return x.toUpperCase();
                }
            }; 
       })

       .filter('toLowerCase',function() {
            return function (x) {
                if(x){
                    return x.toLowerCase();
                }
            }; 
       });
})(app);