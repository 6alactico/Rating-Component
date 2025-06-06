const buttons = document.querySelectorAll('.btn');
const rating = document.getElementById('userRating');
const form = document.getElementById('rating-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener ('submit', (e) => {
    e.preventDefault();

    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
});

buttons.forEach(buttons => {
    buttons.addEventListener('click', function() {
        buttons.classList.toggle('active');
        updateCount();
    });
});

function updateCount() {
    const toggledButtons = document.querySelectorAll('.btn.active').length;
    rating.textContent = `${toggledButtons}`;
}