// Simple animation on profile card hover
document.querySelector('.profile-card').addEventListener('mouseover', function() {
    this.classList.add('hovered');
});

document.querySelector('.profile-card').addEventListener('mouseout', function() {
    this.classList.remove('hovered');
});

// Right side "Hire Me" button - open modal
const hireBtn = document.querySelector('.right-side-btn');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalCloseBtn = document.querySelector('.modal-close-btn');

// When the user clicks the "Hire Me" button
hireBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Close the modal when clicking the 'X' or 'Close' button
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
