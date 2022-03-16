// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // import functions and grab DOM elements
import { renderPastPoll } from './render-utils.js';

const optionAAddButton = document.querySelector('#option-a-add');
const optionBAddButton = document.querySelector('#option-b-add');
const optionAUndoButton = document.querySelector('#option-a-undo');
const optionBUndoButton = document.querySelector('#option-b-undo');
// just like you can use `form` to style every form in css, you can use `form` to grab the first form in querySelector
const form = document.querySelector('form');
const closePollButton = document.querySelector('#close-poll');
const questionEl = document.querySelector('#poll-question');
const optionATitleEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');
const optionAVotesEl = document.querySelector('#option-a-votes');
const optionBVotesEl = document.querySelector('#option-b-votes');

const pastPollsEl = document.querySelector('.past-polls');

// let state
let question = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';

const pastPollsArray = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
optionAAddButton.addEventListener('click', () => {
    optionAVotes++;

    optionAVotesEl.textContent = optionAVotes;
});

optionBAddButton.addEventListener('click', () => {
    optionBVotes++;

    optionBVotesEl.textContent = optionBVotes;
});

optionAUndoButton.addEventListener('click', () => {
    optionAVotes--;

    optionAVotesEl.textContent = optionAVotes;
});

optionBUndoButton.addEventListener('click', () => {
    optionBVotes--;

    optionBVotesEl.textContent = optionBVotes;
});

// 6 lines of new stuff!!! this is how we get data from HTML forms
// this looks like a lot. But no forms will have surprises after this. This is just what forms look like to javascript
form.addEventListener('submit', (e) => {
    e.preventDefault(); // this prevents WEEEEIIIRD FORM BEHAVIOR -- no redirect, no weird stuff in the URL, no 1996 behavior

    // what in the world!!
    // new FormData is a weird function that eats an HTML form element grabbed from the DOM
    // and it returns this weird data object
    const data = new FormData(form);

    // update state
    question = data.get('booger-question');
    optionATitle = data.get('booger-option-a');
    optionBTitle = data.get('booger-option-b');

    displayCurrentPoll();
});

closePollButton.addEventListener('click', () => {
  // when i click the close poll button, clear out the form
    form.reset(); // just clear the DOM
    
    // SAVE A COPY OF STATE
    // then, save the old poll in an object so we can push it to an array
    const poll = makePoll();

    // push this poll obect to an array so we have a history of past polls  
    pastPollsArray.push(poll);

    resetState();

    // reset the DOM with this new, resetted state
    displayCurrentPoll();

    displayList();
});

function makePoll() {
    return {
    // the key is the new key in the new object
    // the value is our question in STATE
        question: question,
      // the value is our optionATitles in STATE
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    };
}

function resetState() {
      // RESET OUR STATE NOW WHAT WE'VE SAVED A COPY
    // reset our state for a new question
    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;
}

function displayCurrentPoll() {
    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
}

function displayList() {
    // "display a list" pattern
    // clear out the content of the list in the DOM
    pastPollsEl.textContent = '';

    // for each item
    for (let pastPoll of pastPollsArray) {
      // make some stuff
      // when you create a DOM element, lets call that RENDER
        const pollEl = renderPastPoll(pastPoll);

        pastPollsEl.append(pollEl);
    }
}
