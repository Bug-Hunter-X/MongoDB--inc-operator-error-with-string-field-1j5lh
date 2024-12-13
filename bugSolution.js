```javascript
// Correct usage of $inc operator.  Handles potential type errors.
db.collection('myCollection').updateOne( { _id: 1 }, { $inc: { field: 1 } }, { upsert: true } );
//Alternative, converting string to number before incrementing
db.collection('myCollection').findOne({_id:1}, (err, doc) => {
  if(err) { console.error(err) }
  let num = parseInt(doc.field);
  if(isNaN(num)) {
    num = 0;
  }
  db.collection('myCollection').updateOne( { _id: 1 }, { $set: { field: num + 1 } } );
});
```