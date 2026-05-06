// Вспомогательные функции для будущих страниц
// Здесь можно добавить интерактив, сохранение заметок и т.д.

console.log('Сайт по уходу за кожей загружен');

// Пример: сохранение заметок пользователя (для будущего функционала)
function saveUserNote(key, value) {
    localStorage.setItem(`skin_note_${key}`, value);
}

function getUserNote(key) {
    return localStorage.getItem(`skin_note_${key}`);
}