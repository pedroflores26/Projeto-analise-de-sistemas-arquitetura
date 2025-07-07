const projectImages = document.querySelectorAll('.project-image img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImage');
const closeModal = document.querySelector('.close-modal');

projectImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src; // <-- Use o src normal
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
