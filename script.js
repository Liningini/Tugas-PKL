function toggleAccordion(id) {
    const item = document.getElementById(id);
    const isOpen = item.classList.contains('open');
    const toggleBtn = item.querySelector('.toggle');
    if (isOpen) {
        item.classList.remove('open');
        toggleBtn.textContent = '+';
    }
    else {
        item.classList.add('open');
        toggleBtn.textContent = '−';
    }
}

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.text-above').classList.toggle('active');
});

