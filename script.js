const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
      
      // Shift content
    if (isOpen) {
        mainContent.classList.add('content-shift');
        overlay.classList.add('active');
        // Adjust button position when sidebar opens
        menuBtn.style.left = (window.innerWidth <= 768 ? '210px' : '260px');
      }else {
        mainContent.classList.remove('content-shift');
        overlay.classList.remove('active');
        menuBtn.style.left = '15px';
      }
});

// Close sidebar when clicking overlay (mobile)
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    mainContent.classList.remove('content-shift');
    overlay.classList.remove('active');
    menuBtn.style.left = '15px';
});

// Optional: Close on ESC key
document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        mainContent.classList.remove('content-shift');
        overlay.classList.remove('active');
        menuBtn.style.left = '15px';
      }
});


