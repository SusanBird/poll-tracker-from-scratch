## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

##HTML Setup:

## Current Poll Form div

-   Question input
-   Option A input
-   Option B input
-   Start poll button

## Current Poll Div

-   h2 for current question
-   display option A and score A div
-   display option B and score B div
-   option A +- buttons
-   option B +- buttons
-   button to publish current poll

## Past Polls Div

-   h2 for past question
-   past option A + score div
-   past option B + score div

## Functions

-   renderPollEll() to render past polls
-   displayCurrentPoll() to mutate DOM to display current state of current poll
-   displayAllPolls() to clear out DOM and append to poll div using current state of past polls
-   renderPoll(poll) to return DOM node

## Events

### User submits question and option names

-   get input values
-   store those values
-   renderPollEl()

### User clicks + or - for options

-   update the vote count
-   display the updated state in DOM
-   renderPollEl() render the current poll to the current poll div

## User clicks close poll button

-   push the current poll to past polls array
-   clear out the old list on the DOM
-   loop through the polls, render and append each one
