// Функция для загрузки комментариев из Local Storage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => addComment(comment));
}

// Функция для добавления нового комментария
function addComment(commentText) {
    const commentContainer = document.getElementById('comments-container');

    // Создаем новый элемент для комментария
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentText;

    // Добавляем новый комментарий в контейнер
    commentContainer.appendChild(newComment);
}

// Функция для сохранения комментария в Local Storage
function saveComment(commentText) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(commentText);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Обработчик события для формы комментариев
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем текст комментария из поля ввода
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    // Добавляем комментарий и сохраняем его в Local Storage
    addComment(commentText);
    saveComment(commentText);

    // Очищаем поле ввода
    commentInput.value = '';
});

// Загрузка комментариев при загрузке страницы
window.addEventListener('DOMContentLoaded', loadComments);
