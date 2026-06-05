const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
// above three establish references to DOM elements used in program; 
//reference html element objects, not properties 
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append(deleteButton);

list.append(li);

function getChapterList() {

}
//array declaration initializes chaptersArray variable with list of 
// chapters returned by getChapterList() funciton or an empty array 
// if function call return null or undefined
let chaptersArray = getChapterList() || [];

//populate displayed list of chapters
// use forEach on chaptersArray to process each entry named chapter
// use arrow function within loop to call new defined function
//      named displayList and pass it the argument of chapter 
// each entry will be processed/ appended to list 
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// change button click event listener to only do following:
//      check if input is empty; if not empty, then... (line 39)
//          call displayList with input.value argument/ function outputs 
//              submitted chapter (line 40)
//          push/ add input.value into chaptersArray (line 41)
//          update localStorage with new array by calling function name 
//              setChapterList (line 42)
//          set input.value to nothing/ clear input (line 43)
//          set focus back to input (line 44)

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

// pull code that builds list item from button event listener into displayList funciton
// use item parameter as input
// deleteChapter function needs to be called within delete button click event 
//      to remove the chapter from array and localStorage
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item; // use of parameter
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete'); // references CSS rule .delete{width:fit-content;} to size delete button 
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // new funciton -- needed to remove chapter from array and LocalStorage
        input.focus();
    });
}

//define setChapterList function to set localStorage item already named
// use JSON.stringify()
function setChapterList() {
    localStorage.setItem('favBOMList', JSON.stringify(chaptersArray));
}

//define getChapterList function to retrieve localStorage item (line 75)
// no parameter needed
// use JSON.parse() to convert string back to data to be assined to array (line 76)
function getChapterList() {
    return JSON.parse(localStorage.getItem('favBOMList'));
}

// define deleteChapter function with parameter chapter (line 84)
// reformat chapter parameter to get rid of X passed on end of chapter string when deleteChapter funciton is called
//      use string.slice() method to extract last chapter (line 85)
//redefine chaptersArray using array.filter method to return everything except removed chapter (line 86)
// call setChapterList function to update localStorage item (line 87)
function deleteChapter() {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
