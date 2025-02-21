
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

//or 

//const filterByGenreTag = function(array,tag) {
    //return array.filter(funtion(movie){
       // return movie.genreTags.includes(tag);
   // });
// };

// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type){
    return array.filter(movie => movie.type === type);
};


// PROBLEM #4 //

const getTopSpecialFeature = function(array, title){
    //base case, if no movie is found with that title
    if (array.length === 0){
        return "no movie found matching that title";
    }
    //recursion
    if (array.title === title)
        return `${array[0].title} : ${array.specialFeatures}`;
    //return function
    return getTopSpecialFeature(slice(1), title);
};


// PROBLEM #5 //

const mapTitles = function(array) {
    const mapped = array.map(movie => `${movie.title}(${movie.year}) - dir.${movie.director}`);
    return mapped;
};
    




// PROBLEM #6 //

const mapSpecialFeatures = function(array){
    const mapped = array.map(title => title.specialFeatures || []);
    return mapped;
};

// PROBLEM #7 //

const createNonsenseString = function(array, index) {
    const result = array.reduce((acc, movie) => {
        // Check if the index is within bounds of the title
        const char = movie.title[index] || '';
        return acc + char;
    }, '');
    return result;
};

// PROBLEM #8 //

const getValues = function(object, props) {
    const values = props.map(key => object[key]);
    return values;
};

