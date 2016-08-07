# Day 6 note taking

## DOM (Document Object Element)
1. **ng-diabled**: bind the application data to the HTML *diabled* attribute.
2. **ng-show**: bind the application data to the HTML *show* attribute.
3. can use expression to populate the html attribute.
```javascript
<div ng-app="" ng-init="hour=13">
<p ng-show="hour > 12">I am visible.</p>
</div>
```