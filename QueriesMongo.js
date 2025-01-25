db.Restaurantes.find()
db.Restaurantes.find({},{restaurant_id:1, name:1,borough:1, cuisine:1})
db.Restaurantes.find( {}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1}) 
db.Restaurantes.find( {}, {_id:0, restaurant_id:1, name:1, borough:1, zipcode:1}) 
db.Restaurantes.find( {borough:"Bronx"}) 
db.Restaurantes.find( {borough:"Bronx"}).limit(5) 
db.Restaurantes.find( {borough:"Bronx"}).skip(5).limit(5)
db.Restaurantes.find({"grades.score": { $gt:90 } }); 
db.Restaurantes.find({grades: {$elemMatch: {score: {$gt:90, $lt:100} } }}); 
db.Restaurantes.find({ "address.coord.0": { $lt: -95.754168 } }); 
db.Restaurantes.find({$and: [{cuisine: { $ne:"American "}},{"grades.score": { $gt:70}},{"address.coord.0": {$lt: -65.754168}}]}); 
db.Restaurantes.find({cuisine: { $ne:"American "},"grades.score": { $gt:70},"address.coord.0": {$lt: -65.754168}}); 
db.Restaurantes.aggregate([{$match: {cuisine: {$ne: "American "},"grades.grade": {$eq: "A"},borough: {$ne: "Brooklyn"}}},{$sort: {"cuisine":-1}}]); 
db.Restaurantes.find( {name: {$regex:/^Wil/}}, {restaurant_id:1, name:1, borough:1, cuisine:1,_id:0});    
db.Restaurantes.find( {name: {$regex:/ces$/}}, {restaurant_id:1, name:1, borough:1, cuisine:1,_id:0}); 
db.Restaurantes.find( {name: {$regex:/Reg/}}, {restaurant_id:1, name:1, borough:1, cuisine:1,_id:0});
db.Restaurantes.find({borough: {$eq: "Bronx"},$or: [{cuisine: {$eq: "American "}},{cuisine: {$eq: "Chinese"}}]});
db.Restaurantes.find({$or: [{borough: {$eq: "Staten Island"}},{borough: {$eq: "Queens"}},{borough: {$eq: "Bronx"}},{borough: {$eq: "Brooklyn"}}]},{restaurant_id:1,name:1, borough:1, cuisine:1, _id:0}); 
db.Restaurantes.find({$nor: [{borough: {$eq: "Staten Island"}},{borough: {$eq: "Queens"}},{borough: {$eq: "Bronx"}},{borough: {$eq: "Brooklyn"}}]},{restaurant_id:1,name:1, borough:1, cuisine:1, _id:0}); 
db.Restaurantes.find({"grades.score": {$lt:10}},{restaurant_id:1,name:1, borough:1, cuisine:1, _id:0});
db.Restaurantes.find( {cuisine: {$eq:"Seafood"},$nor: [{cuisine: {$eq:"American "}},{cuisine: {$eq: "Chinese"}},{name: {$regex: /^Wil/}}]},{restaurant_id:1, name:1,borough:1,cuisine:1, _id:0});
db.Restaurantes.find({"grades":{$elemMatch: {score:11,date: ISODate("2014-08-11T00:00:00Z"), grade:"A"}}},{restaurant_id:1, name:1,grades:1}); 
db.Restaurantes.find({"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")},{restaurant_id: 1,name: 1,grades: 1, _id: 0});
db.Restaurantes.find({"address.coord.1": { $gte: 42, $lte: 52 }},{restaurant_id: 1, name: 1,"address.coord": 1,"address.street": 1, _id: 0});
db.Restaurantes.find({}, { name: 1, _id: 0 }).sort({ name: 1 }); 
db.Restaurantes.find({}, { name: 1, _id: 0 }).sort({ name: -1 });
db.Restaurantes.find({}, { name: 1, cuisine: 1, borough: 1, _id: 0 }).sort({ cuisine: 1, borough: -1 }); 
db.Restaurantes.find({ "address.street": { $exists: true } }, { name: 1, "address.street": 1, _id: 0 }); 
db.Restaurantes.find({ "address.coord": { $type: "double" } }, { name: 1, "address.coord": 1, _id: 0 }); 
db.Restaurantes.find({ "grades.score": { $mod: [7, 0] } },{ restaurant_id: 1, name: 1, "grades.grade": 1, _id: 0 });
db.Restaurantes.find({ name: { $regex: /mon/i } },{ name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 });
db.Restaurantes.find({ name: { $regex: /^Mad/i } },{ name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 });
  
  
  
  



          
          