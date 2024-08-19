// - Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
// let array = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (let i = 0; i < array.length; i++) {
//     let arrayElement = array[i];
//     document.write(`<p>${arrayElement.length}</p>`)
// }

// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
// let array = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     document.write(`${arrayElement.toUpperCase()}`)
// }

//  Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let array = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     document.write(`${arrayElement.toLowerCase()}`)
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let s = str.trim();
// document.write(`${s}`)

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// function stringToArray (str) {
//     if (str){
//         let AOfSting = str.split(' ');
//         return AOfSting
//     }else {
//         return [' ']
//     }
// }
// console.log(stringToArray(undefined))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0]
// let strmap = array.map(arr=> `${arr}`)
// console.log(strmap)

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// function sortNums(array,direction) {
//     if (direction === 'ascending'){
//         array.sort((a,b) => a - b)
//     }else if (direction === 'descending'){
//         array.sort((a,b) => b - a)
//     }
// }
// sortNums(nums,'ascending')
// console.log(nums)
// sortNums(nums,'descending')
// console.log(nums)

// є масив
// -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let descending = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration)
// console.log(descending)
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filteredArray = coursesAndDurationArray.filter(month => month.monthDuration > 5)
// console.log(filteredArray)
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let mappedArray = coursesAndDurationArray.map((courses,i) => {
//     return {
//         id:i+1,
//         title:courses.title,
//         monthDuration:courses.monthDuration
//     }
// })
// console.log(mappedArray)

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// описати колоду карт (від 6 до туза без джокерів)
// let suits = ['spade','diamond','heart','club']
// let values = ['6','7','8','9',10,'jack','queen','king','ace',]//  '6','7','8','9'
// let cards = [];
// for (const suit of suits) {
//     for (const value of values) {
//         let card = {cardSuit:suit,value:value};
//         if (suit === 'heart' || suit === "diamond"){
//             card.color = 'red'
//         } else {
//             card.color = 'black'
//         }
//         cards.push(card)
//     }
// }
// console.log(cards)

// - знайти піковий туз
// let spadeAce = cards.find(ace => ace.value === 'ace' && ace.cardSuit === 'spade')
// console.log(spadeAce)

// - всі шістки
// let valueOfSix = cards.filter(six => six.value === '6')
// console.log(valueOfSix)

// - всі червоні карти
// let redCards = cards.filter(red => red.color === 'red')
// console.log(redCards)

// - всі буби
// let diamondCards = cards.filter(card=>card.cardSuit === 'diamond')
// console.log(diamondCards)


// ---------- всі трефи від 9 та більше
                        // let clubCards = cards.filter(club=>club.value > 9 && club.cardSuit === 'club')
                        // let clubCardsArray = (jack,queen,king,ace) =>{
                        //     let clubJack = cards.find(jack => jack.cardSuit === 'club' && jack.value === 'jack')
                        //     clubJack = 11;
                        //     let clubCards = cards.filter(club=>club.value > 9 && club.cardSuit === 'club')
                        //     return clubCards
                        // }
                        // console.log(clubCards)

                        // let modifyCardValue = (cardSuit, value, newValue) => {
                        //     let card = cards.find(card => card.cardSuit === cardSuit && card.value === value);
                        //     if (card) {
                        //         card.numericValue = newValue;
                        //     }
                        //     return card;
                        // }
                        // modifyCardValue('club', 'jack', 11);

// ----------------- ПРАВИЛЬНЕ ----------------------------
// let clubCardsArray = cards.filter(card => {
//     if (card.cardSuit === 'club') {
//         if (card.value > '9') {
//             return true;
//         }
//     }
//     return false;
// });
// console.log(clubCardsArray);

//-- Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// let reducedObj = cards.reduce((accumulator,card) => {
//     if (card.cardSuit === 'spade'){
//         accumulator.spades.push(card)
//     }else if (card.cardSuit === 'diamond'){
//         accumulator.diamonds.push(card)
//     }else if (card.cardSuit === 'heart'){
//         accumulator.hearts.push(card)
//     }else if (card.cardSuit === 'club'){
//         accumulator.clubs.push(card)
//     }
//     return accumulator
// },{
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
// console.log(reducedObj)

// взяти з arrays.js масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в яких в modules є sass
// let filteredModuleSass = coursesArray.filter(course => course.modules.includes('sass'))
// console.log(filteredModuleSass)

//--написати пошук всіх об'єктів, в яких в modules є docker
// let filteredModuleDocker = coursesArray.filter(course => course.modules.includes('docker'))
// console.log(filteredModuleDocker)



