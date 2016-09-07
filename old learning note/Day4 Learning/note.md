# Day 4 Learning note

## Concepts learned:
1. service is a function or object that is available for angualr JS application.  
2. **Example** $location: return the location of current webpage..

```javascript
view: 
{{myUrl}}

controller: 
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});
</script>
```

3. **Example** $http: http service makes a request to the server and return a reponse.  
	http://www.w3schools.com/angular/angular_http.asp  
4. **Example** $timeout: similar to Thread.sleep(), or window.setTimeout  
```javascript
	$timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
```

## HTTP service
1. Method: .delete(), get(), head(), jsonp(), patch(), post(), put()  
2. Good example: 

```javascript
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("wrongfilename.htm")
    .then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
});
```