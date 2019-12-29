const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arr;
      if(collection instanceof Array) {
        arr = collection 
      } else {
        arr = Object.values(collection)
      }
      arr.forEach(element => {
        callback(element)
      });
      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
