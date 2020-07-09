import photo_0 from './chacknoris_4.png';
import photo_1 from './shop.png';
import photo_2 from './movie1.png';
import photo_3 from './PopularMovie.png';
import photo_4 from './firebase.png';
import photo_5 from './Layout.png';
import photo_6 from './session.png';
import photo_7 from './map3D.png';


export const projectData = [
    {
        name: 'Chuck Norris',
        surname: 'React, Redux, Saga, Material UI, LocalStorage',
        description: `In this task it was necessary:
        1. To use Chuck Norris API to get jokes in JSON format
        2. Ability to get a random joke and joke from categories
        3.  Any joke can too by to mark as favorite
        4. Jokes marked as a favorite should appear in the right box or pull-up  section
        5. Favorite jokes were should stay after reloading pages without used Back-and`,
        image: photo_0,
        url: 'https://github.com/dimagong/chuckNorris',
        id: 0
    },
    {
        name: 'Shop',
        surname: 'React, Redax, Ant Design, Firebase, Redux-persist, Axios',
        description: "Was created a site for the shop. In this project was a realized  cart for the customer, possibly alter the list of items,  also the possibility to log in for a customer and remembering his data. \n\n This is the site project (https://dimagong.github.io/market/)",
        image: photo_1,
        url: 'https://github.com/dimagong/market',
        id: 1
    },
    {
        name: 'Movie',
        surname: 'React-Native, Redux, Redux Thunk, Fetch',
        description: 'Was created mobile-app for searching movies. Customers can input whatever name of films and receive the result require from the server.',
        image: photo_2,
        url: 'https://github.com/dimagong/MobileRedux',
        id: 2
    },
    {
        name: 'Best movie',
        surname: 'React, Fetch, Bootstrap, Classnames',
        description: 'This project has created as an application for customers to find a list of popular movies, financially successful, and regular films. \n\n This is the site project (https://dimagong.github.io/cinema/)',
        image: photo_3,
        url: 'https://github.com/dimagong/cinema',
        id: 3
    },
    {
        name: 'Firebase server',
        surname: 'Firebase',
        description: 'Was created a server for send data from Firebase to whatever site and also for store logins and passwords users.',
        image:  photo_4, 
        url: 'https://github.com/dimagong/firebase-server',
        id: 4
    },
    {
        name: 'Layout',
        surname: 'JS, SCSS, WEBPACK',
        description: 'This is a landing page, where was implement slider and form for customers with help native JS and SCSS. For convenience was used webpack.\n\n This is the site project (https://dimagong.github.io/layout/)',
        image: photo_5,
        url: 'https://github.com/dimagong/layout',
        id: 5
    },
    {
        name: 'Pomodoro Clock',
        surname: 'React, Redux',
        description: 'Was needed to invent timer with large functional.  Users can set up time, break, and if, after the break, the timer continues work, begin to sound music.  This task was to be performed without hooks, only with help class components.',
        image: photo_6,
        url: 'https://codepen.io/dimagong/pen/zYxdmwj?editors=0110',
        id: 6
    },
    {
        name: 'Choropleth Map',
        surname: 'JS, D3.js, Fetch',
        description: "Necessary to build map USA, using json data from different sources. Need to show the percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)",
        image: photo_7,
        url: 'https://codepen.io/dimagong/pen/zYGLObZ',
        id: 7
    }
];

