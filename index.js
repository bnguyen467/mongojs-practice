const mongojs = require('mongojs');
const db = mongojs('favorite_db');
const inquirer = require('inquirer');
require('console.table');

function init()
{
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: [
                    'View Collections',
                    'Add New Data To Collections',
                    'Update Data In Collections'
                ]
            }
        ])
        .then( ({ action }) => {
            switch(action)
            {
                case 'View Collections':
                    viewAll();
                    break;
                case 'Add New Data To Collection':
                    addAll();
                    break;
                case 'Update Data In Collections':
                    updateAll();
                    break;
            }
        })
        .catch(error => {
            if (error) { console.log(error) } 
        })
}

// View All
function viewAll()
{
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Pick One: ',
                choices: [
                    'View All Movies',
                    'View All Songs',
                    'View All Foods',
                    'View All Games'
                ]
            }
        ])
        .then( ({ action }) => {
            switch (action)
            {
                case 'View All Movies':
                    viewMovies();
                    break;
                case 'View All Songs':
                    viewSongs();
                    break;
                case 'View All Foods':
                    viewFoods();
                    break;
                case 'View All Games':
                    viewGames();
                    break;
            }
        })
        .catch(error => {
            if (error) { console.log(error) } 
        })
}

// View Movies
function viewMovies()
{
    db.movies.find((error, data) => {
        if(error) { console.log(error) }
        console.table(data);
        init();
    })
}

// View songs
function viewSongs()
{
    db.songs.find((error, data) => {
        if(error) { console.log(error) }
        console.table(data);
        init();
    })
}

// View Foods
function viewFoods()
{
    db.foods.find((error, data) => {
        if(error) { console.log(error) }
        console.table(data);
        init();
    })
}

// View Games
function viewGames()
{
    db.games.find((error, data) => {
        if(error) { console.log(error) }
        console.table(data);
        init();
    })
}

// Add All
function addAll()
{
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Pick One: ',
                choices: [
                    'Add New Movies',
                    'Add New Songs',
                    'Add New Foods',
                    'Add New Games'
                ]
            }
        ])
        .then( ({ action }) => {
            switch(action)
            {
                case 'Add New Movies':
                    addMovies();
                    break;
                case 'Add New Songs':
                    addSongs();
                    break;
                case 'Add New Foods':
                    addFood();
                    break;
                case 'Add New Games':
                    addGames();
                    break;
            }
        })
}

// Add Movies
function addMovies()
{
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the movie?'
            },
            {
                type: 'input',
                name: 'director',
                message: 'Who is the director of the movie?'
            },
            {
                type: 'input',
                name: 'date',
                message: 'When is the release date of the movie?'
            }
        ])
        .then(data => {
            db.movies.insert(data, error => {
                if (error) { console.log(error) }
                console.log(`Added ${data.title} to the list!`)
                init();
            })
        })
        .catch(error => {
            if (error) { console.log(error) }  
        })
}


// Add Songs
function addSongs(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the song?'
            },
            {
                type: 'input',
                name: 'singer',
                message: 'Who is the sing of the song?'
            },
            {
                type: 'input',
                name: 'date',
                message: 'When is the song released?'
            }
        ])
        .then(data => {
            db.songs.insert(data, error => {
                if (error) { console.log(error) }
                console.log(`Added ${data.title} to the list!`)
                init();
            })
        })
        .catch(error => {
            if (error) { console.log(error) }  
        })
}

// Add Food
function addFood()
{
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the food?'
            },
            {
                type: 'input',
                name: 'country',
                message: 'Where is the food originally from?'
            }
        ])
        .then(data => {
            db.foods.insert(data, error => {
                if (error) { console.log(error) }
                console.log(`Added ${data.name} to the list!`)
                init();
            })
        })
        .catch(error => {
            if (error) { console.log(error) }  
        })
}

// Add Game
function addGames()
{
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the title of the game?'
            },
            {
                type: 'input',
                name: 'type',
                message: 'What is the type of the game?'
            },
            {
                type: 'input',
                name: 'date',
                message: 'When is the game released?'
            }
        ])
        .then(data => {
            db.games.insert(data, error => {
                if (error) { console.log(error) }
                console.log(`Added ${data.name} to the list!`)
                init();
            })
        })
        .catch(error => {
            if (error) { console.log(error) }  
        })
}

// Update All
function updateAll()
{
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Pick One:',
                choices: [
                    'Update A Movie Information',
                    'Update A Song Information',
                    'Update A Food Information',
                    'Update A Game Information'
                ]
            }
        ])
        .then( ({ action }) => {
            switch(action)
            {
                case 'Update A Movie Information':
                    updateMovie();
                    break;
                case 'Update A Song Information':
                    updateSong();
                    break;
                case 'Update A Food Information':
                    updateFood();
                    break;
                case 'Update A Game Information':
                    updateGame();
                    break;

            }
        })
        .catch(error => {
            if (error) { console.log(error) }  
        })
}

// Update Movies
function updateMovie()
{
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What Do You Want To Do?',
                choices: [
                    'Update the Title Of A Movie',
                    'Update Director Of A Movie',
                    'Update Release Date Of A Movie'
                ]
            }
        ])
        .then( ({ action }) => {
            switch(action)
            {
                case 'Update the Title Of A Movie':
                    updateMovieTitle();
                    break;
                case 'Update Director Of A Movie':
                    updateMovieDirector();
                    break;
                case 'Update Release Date Of A Movie':
                    updateMovieDate();
                    break;
            }
        })
        .catch(error => {
            if (error) { console.log(error) }  
        })
}

// Update Movie Title
function updateMovieTitle()
{
    db.movies.find((error, database) => {
        if (error) { console.log(error) }

        let choiceArray = [];
        database.forEach(element => {
            choiceArray.push(element.title)
        });

        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'title',
                    message: 'Pick A Movie: ',
                    choices: choiceArray
                },
                {
                    type: 'input',
                    name: 'newTitle',
                    message: 'New Title For The Movie: ',
                }
            ])
            .then(data => {
                db.movies.update({ title: data.title}, { $set: { title: data.newTitle } }, error => {
                    if(error) { console.log(error) }

                    console.log(`${data.title} has changed to ${data.newTitle}!`);
                    init();
                })
            })
            .catch(error => {
                if (error) { console.log(error) }  
            })
    })
}

// Update Movie Director
function updateMovieDirector()
{
    db.movies.find((error, database) => {
        if (error) { console.log(error) }

        let choiceArray = [];
        database.forEach(element => {
            choiceArray.push(element.title)
        });

        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'title',
                    message: 'Pick A Movie: ',
                    choices: choiceArray
                },
                {
                    type: 'input',
                    name: 'newDirector',
                    message: 'Director Of The Movie: ',
                }
            ])
            .then(data => {
                db.movies.update({ title: data.title}, { $set: { director: data.newDirector } }, error => {
                    if(error) { console.log(error) }

                    console.log(`${data.title}'s director has changed to ${data.newDirector}!`);
                    init();
                })
            })
            .catch(error => {
                if (error) { console.log(error) }  
            })
    })
}

// Update Movie Release date
function updateMovieDate()
{
    db.movies.find((error, database) => {
        if (error) { console.log(error) }

        let choiceArray = [];
        database.forEach(element => {
            choiceArray.push(element.title)
        });

        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'title',
                    message: 'Pick A Movie: ',
                    choices: choiceArray
                },
                {
                    type: 'input',
                    name: 'newDate',
                    message: 'Release Date Of The Movie: ',
                }
            ])
            .then(data => {
                db.movies.update({ title: data.title}, { $set: { date: data.newDate } }, error => {
                    if(error) { console.log(error) }

                    console.log(`${data.title}'s release date has changed to ${data.newDate}!`);
                    init();
                })
            })
            .catch(error => {
                if (error) { console.log(error) }  
            })
    })
}

init();