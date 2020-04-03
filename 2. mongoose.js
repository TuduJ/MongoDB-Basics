var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/dogapp", {useNewUrlParser: true, useUnifiedTopology: true});    //connect

var dogSchema = new mongoose.Schema({               //creating a schema
    name: String,
    age: Number,
    breed: String
});

var Dog = mongoose.model("Dogs", dogSchema);         //creating a model //Dog is the single version of the model  //dog pluralised will be the collection name

var Tom = new Dog({             
    name: "Tom",
    age: 10,
    breed: "Mutt"
});

Tom.save(function(err, dogs){            //adding the dog
    if(err){
        console.log("Wrong!");
    } else {
        console.log("We added a Dog!");
        console.log(dogs);
    }
});

Dog.create({                            //combined
    name:"Matt",
    age: 10,
    breed: "Mutt"
}, function(err, dog){
    if(err){
        console.log(err);
    } else {
        console.log(dog);
    }
})

Dog.find({}, function(err, dog){       //show data
    if(err){
        console.log("Wrong!");
    } else {
        console.log(dog);
    }
});
