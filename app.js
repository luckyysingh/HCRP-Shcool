addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

function showFeePage() {
    document.getElementById("payment-container").style.display = "block";
}

// stats
const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;

            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / 100;
                const speed = counter.hasAttribute('data-slow') ? 100 : 30;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, speed);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCount();
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    observer.observe(counter);
});
