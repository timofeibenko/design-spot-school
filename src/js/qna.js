const qnaListItems = document.querySelectorAll('.qna__list-item');

qnaListItems.forEach((listItem) => {
    listItem.addEventListener('click', (ev) => {
        listItem.classList.toggle('active')
    })
});
