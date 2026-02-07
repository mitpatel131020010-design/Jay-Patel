//Toggle Menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.classList.toggle('open');
});

// Initialize Typed.js for animated text effect
var typed = new Typed('#element', {
    strings: [
      '&gt; Web PenTesting.',
      '&gt;&gt; Android App PenTesting.',
      '&gt;&gt; Memory Forensics.'
    ],
    typeSpeed: 50,
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image Modal Functionality
function showImageModal(imageElement) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');

    const parent = imageElement.closest('.info');
    const title = parent.querySelector('h2').textContent;
    const text = parent.querySelector('p').textContent;

    modalTitle.textContent = title;
    modalImage.src = imageElement.src;
    modalText.innerHTML = `<p>${text}</p>`;
    modal.style.display = 'flex';
}

function showReadMoreModal(buttonElement) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');

    const title = buttonElement.dataset.title;
    const image = buttonElement.dataset.image;
    const templateId = buttonElement.dataset.template;
    const template = document.getElementById(templateId);

    if (template) {
        modalTitle.textContent = title;
        modalImage.src = image;
        modalText.innerHTML = template.innerHTML;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal on outside click
window.addEventListener('click', function (e) {
    const modal = document.getElementById('imageModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

