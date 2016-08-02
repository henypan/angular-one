# Day 4 Learning note

## Concepts learned:
1. service is a function or object that is available for angualr JS application.  
2. example $location: return the location of current webpage..

```
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