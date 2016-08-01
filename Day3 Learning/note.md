# Day 3 Learning note

## Concepts learned:
1. $scope: scope is the binding part of HTML(view) and Javascript(controller);

2. MVC model in Angular JS:  
	a. View: HTML  
	b. Model: which is the data available for the current view  
	c. Controller: which is the javascript function that makes CRUD of the data  

3. **$rootScope**: is the scope created on the HTML element that contains the ng-app directory
	a. if a variable in both current scope and and rootScope shares same name, the current scope  
	will override the root scope one.  

4. Filter: by using a pipe '|' function, it will apply the filter to existing data.
	a. Example: using "filter" based on the user input can achive key-stroke search.  
5. Angular JS data direction: model -> controller -> function
