export function renderPoll(pastPoll) {
    const pollEl = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pTitleA = document.createElement('p');
    const pTitleB = document.createElement('p');
    const pVotesA = document.createElement('p');
    const pVotesB = document.createElement('p');

    pollEl.classList.add('past-poll');

    console.log(pastPoll);
    
    pQuestionEl.textContent = pastPoll.question;
    pTitleA.textContent = pastPoll.optionATitle;
    pTitleB.textContent = pastPoll.optionBTitle;
    pVotesA.textContent = pastPoll.optionAVotes;
    pVotesB.textContent = pastPoll.optionBVotes;

    pollEl.append(pQuestionEl, pTitleA, pTitleB, pVotesA, pVotesB);

    // return the DOM element
    return pollEl;
}