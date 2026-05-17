document.addEventListener('DOMContentLoaded', () => {
    // Subtle entrance animations for source items
    const sourceItems = document.querySelectorAll('.source-item');
    sourceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1 + 0.5}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
});
