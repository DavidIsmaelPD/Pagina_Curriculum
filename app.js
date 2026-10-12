const sr = ScrollReveal({
    distance: '60px',
    duration: 1200,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    reset: false
});
sr.reveal('.reveal-hero', { origin: 'bottom' });
sr.reveal('.reveal-card', { origin: 'bottom', interval: 250 });
sr.reveal('.reveal-title', { origin: 'top' });
sr.reveal('.reveal-left', { origin: 'left', delay: 200 });
