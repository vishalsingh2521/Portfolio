//counter
const counters = document.querySelectorAll('.value');
const speed = 1000;

const animateCounters = (counter) => {
    const updateCounter = () => {
        const value = +counter.getAttribute('num');
        const data = +counter.innerText;
        counter.innerText = data < value ? Math.ceil(data + value / speed) : value;
        if (data < value) setTimeout(updateCounter, 20);
    };
    updateCounter();
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters(entry.target);
            observer.unobserve(entry.target); // Stop observing after the animation starts
        }
    });
}, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the container is visible
});

// Start observing each counter
counters.forEach(counter => observer.observe(counter));



// hover code for the services section
const serviceItems = document.querySelectorAll('.service-dis');

serviceItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        serviceItems.forEach(el => el.classList.remove('active', 'up', 'down'));
        item.classList.add('active');

        serviceItems.forEach((el, i) => {
            if (i < index) {
                el.classList.add('up');
            } else if (i > index) {
                el.classList.add('down');
            }
        });
    });
});
