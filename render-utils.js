export function renderPastPoll(pastPoll) {
    const container = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pTitleA = document.createElement('p');
    const pTitleB = document.createElement('p');
    const pVotesA = document.createElement('p');
    const pVotesB = document.createElement('p');

  // add some text content
    container.classList.add('past-poll');
    pQuestionEl.textContent = pastPoll.question;
    pTitleA.textContent = pastPoll.optionATitle;
    pTitleB.textContent = pastPoll.optionBTitle;
    pVotesA.textContent = pastPoll.optionAVotes;
    pVotesB.textContent = pastPoll.optionBVotes;

  // and append
    container.append(pQuestionEl, pTitleA, pTitleB, pVotesA, pVotesB);

    // return the DOM element
    return container;
}