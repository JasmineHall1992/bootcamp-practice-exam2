
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 //
//create a function that takes in two parameters
const setDigitalCode = function(array, value){
    //iterate through the array backwards, access every other movie
 for(let i = array.length - 1; i >= 0; i -= 2){
    array[i].digitalCode = value;

 }
   return array;
};

// PROBLEM #2 //
//use filter to only return certain movie abjects
const filterByGenreTag = function(array, tag) {
    return array.filter(movie => movie.genreTags.toLowerCase() === tag.toLowerCase()); 
};

//or DO THAT ONE

//const filterByGenreTag = function(array,tag) {
    //return array.filter(funtion(movie){
       // return movie.genreTags.includes(tag);
   // });
// };

// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type) {
    return array.filter(function(movie) {
        for (let i = 0; i < movie.specialFeatures.length; i++) {
            if (movie.specialFeatures[i] === type) { // Assuming `specialFeatures` is an array of strings
                return true;
            }
        }
        return false;
    });
};


// PROBLEM #4 //

const getTopSpecialFeature = function(array, title){
    //base case, if no movie is found with that title
    if (array.length === 0){
        return "no movie found matching that title";
    }
    //recursion
    if (array[0].title === title)
        return `${array[0].title} : ${array[0].specialFeatures[0].title}`;
    //return function, start a slice at the 1 index so you can do it again
    return getTopSpecialFeature(array.slice(1), title);
};


// PROBLEM #5 //

//I: function takes in an array of movie objects
//O: function returns a new array of strings
//C: must use map

const mapTitles = function(array){
    //use map to return a new array of strings of a movie's title year and director
    return array.map(function(movie){
        return `${movie.title} (${movie.year}) - dir. ${movie.director}`;
    });
}
//OR
//** const mapTitles = function(array) {
    //const mapped = array.map(movie => `${movie.title}(${movie.year}) - dir.${movie.director}`);
    //return mapped;
//};
    




// PROBLEM #6 //
//I: function takes in an array of movie objects
//O: return a new array of subarrays containing the titles of each movie's special features

const mapSpecialFeatures = function(array){
    //use map to return an array of subarrays;
    return array.map(function(movie){
        const holderArray = [];
        for (let i = 0; i < movie.specialFeatures.length; i++){
            holderArray.push(movie.specialFeatures[i].title);

        }
        return holderArray;
    });
}

// PROBLEM #7 //

//I: takes in an array of movie objects and a number representing an index
//O: function returns a new string by adding each movie's title
//C: use reduce

const createNonSenseString = function(array, index){
    return array.reduce(function(acc, current){
        acc += current.title.charAt(index);
        return acc;
    }, "");
};


// PROBLEM #8 //
//I: takes in object and an array of keys
//O: returns a new array of values that exist in all those keys

//const getValues = function(object,props) {
   // return props.map(function(key){
        //return object[key];
    //});
//};

//OR

//const getValues = function(object, props) {
    //const values = props.map(key => object[key]);
    //return values;
//};

//OR THIS WAS DONE IN CLASS yea

const getValues = function(object,props){
    const output = [];
    //iterate throguth the array of props
    for (let i = 0; i < props.length; i++){
        //access the current key on the object to push value into output array
        output.push(object[props[i]]);
    }
    return output;
}