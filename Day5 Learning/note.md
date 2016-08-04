# Day 5 Learning note
1. **ng-directive** is perfect for displaying table element.
2. $index: is the data for getting the index of the table row.

```javascript
<table>
  <tr ng-repeat="x in names">
    <td>{{ $index + 1 }}</td>
    <td>{{ x.Name }}</td>
    <td>{{ x.Country }}</td>
  </tr>
</table>
Try it Yourself »
```
3. $odd and $even are used to create strip pattern on the table.