const buttons = document.querySelectorAll('.btn');
const rating = document.getElementById('userRating');
const form = document.getElementById('rating-form');
const thankYou = document.getElementById('thank-you');

let selectedRating = null;

form.addEventListener ('submit', (e) => {
    e.preventDefault();

    if (selectedRating !== null) {
        form.classList.add('hidden');
        thankYou.classList.remove('hidden');
        rating.textContent = selectedRating;
    }
});

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');

        selectedRating = this.value;
        console.log(this.value)
    });
});