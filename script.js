// Sidebar Build

 document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('sidebar-container');
  if (!container) return;

  // === EDIT THIS MENU ONLY ===
  const menuItems = [
    { href: 'index.html', text: 'Verison Overview' },
    { href: 'versionunknown.html', text: 'Version Unknown' },
    { href: 'version129.html', text: 'Version 1.2.9' },
    { href: 'version128.html', text: 'Version 1.2.8' },
    { href: 'version127.html', text: 'Version 1.2.7' },
    { href: 'version126.html', text: 'Version 1.2.6' },
    { href: 'version125.html', text: 'Version 1.2.5' },
    { href: 'version124.html', text: 'Version 1.2.4' },
    { href: 'version123.html', text: 'Version 1.2.3' },
    { href: 'version122.html', text: 'Version 1.2.2' },
    { href: 'version121.html', text: 'Version 1.2.1' },
    { href: 'version120.html', text: 'Version 1.2.0' },
    { href: 'version113.html', text: 'Version 1.1.3' },
    { href: 'version112.html', text: 'Version 1.1.2' },
    { href: 'version111.html', text: 'Version 1.1.1' },
    { href: 'version110.html', text: 'Version 1.1.0' },
    { href: 'version105.html', text: 'Version 1.0.5' },
    { href: 'version104.html', text: 'Version 1.0.4' },
    { href: 'version103.html', text: 'Version 1.0.3' },
    { href: 'version102.html', text: 'Version 1.0.2' },
    { href: 'version101.html', text: 'Version 1.0.1' },
    { href: 'version100.html', text: 'Version 1.0.0' },
    { href: 'version005.html', text: 'Version 0.0.5' },
    { href: 'version004.html', text: 'Version 0.0.4' },
    { href: 'version003.html', text: 'Version 0.0.3' },
    { href: 'version002.html', text: 'Version 0.0.2' },
    { href: 'version001.html', text: 'Version 0.0.1' },
    { href: 'version000.html', text: 'Version 0.0.0' }
  ];

  // Build sidebar HTML  
    let navHTML = '<nav><ul>';
     menuItems.forEach(item => {
      navHTML += `<li><a href="${item.href}">${item.text}</a></li>`;
    });
    navHTML += '</ul></nav>';

     const sidebarHTML = `
    <aside id="sidebar">
     
      ${navHTML}
    </aside>
    <button id="toggle-sidebar" aria-label="Toggle menu">Menu</button>
  `;

  container.innerHTML = sidebarHTML;

  // === Mobile Toggle ===
  const sidebar = document.getElementEOS('sidebar');
  const toggleBtn = document.getElementById('toggle-sidebar');

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('visible');
  });

  // Close on outside click (mobile only)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('visible');
    }
  });

  // === Highlight Active Page ===
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#sidebar a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});



// Sidebar Functions
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


//Footer JS
document.addEventListener('DOMContentLoaded', () => {
   const container = document.getElementById('footer-container');
    if (!container) return;

 // Edit Below 
   const footerText = `
   Version history last updated: <strong>December 20, 2025</strong> • Maintained with care
    `;

  container.innerHTML = `
   <footer id="footer">
   <p>${footerText}</p>
   </footer>
   `;
  });

//Accordion for Milestones

  const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active1");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                // Close others first (accordion behavior)
                for (let j = 0; j < coll.length; j++) {
                    if (j !== i) {
                        coll[j].classList.remove("active1");
                        coll[j].nextElementSibling.style.maxHeight = null;
                    }
                }
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }