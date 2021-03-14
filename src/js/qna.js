// const listItem = document.querySelector('#qnaListItem');
// const answer = document.querySelector('#qnaAnswer')
// const toggler = document.querySelector('#qnaToggle');
//
// listItem.addEventListener('click', () => {
//     listItem.classList.toggle('active')
// })

const qnaListItems = document.querySelectorAll('.qna__list-item');

qnaListItems.forEach((listItem) => {
    listItem.addEventListener('click', (ev) => {
        listItem.classList.toggle('active')
    })
})
