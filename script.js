/* =========================================================
   ASHOK // NEO-BRUTALIST PORTFOLIO — SCRIPTS
   Custom cursor • Scroll reveal • Scroll progress bar
   ========================================================= */

// ---- Custom Cursor Logic ----
const cursor = document.getElementById('cursor');
const hoverElements = document.querySelectorAll('.cursor-hover, a, button, input, textarea');

document.addEventListener('mousemove', (e) => {
    if (!cursor) return;
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.transform = 'translate(-50%, -50%)';
});

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (!cursor) return;
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.backgroundColor = '#FBFF48'; // Neo Yellow
        cursor.style.mixBlendMode = 'normal';
        cursor.style.border = '2px solid black';
    });

    el.addEventListener('mouseleave', () => {
        if (!cursor) return;
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.backgroundColor = '#fff';
        cursor.style.mixBlendMode = 'difference';
        cursor.style.border = 'none';
    });
});

// ---- Scroll Reveal Logic ----
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ---- Scroll Progress Bar ----
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    progressBar.style.width = scrolled + '%';
});
