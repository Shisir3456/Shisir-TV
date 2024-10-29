document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const nav = document.querySelector('nav');
    nav.classList.toggle('dark-mode');
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => card.classList.toggle('dark-mode'));
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => card.classList.toggle('dark-mode'));
});

// সার্চ ফিচার
document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});