const section = document.querySelector('.services-section');
const cards = document.querySelectorAll('.srvise-card');
const rotations = [0, -4, 4, -5];

function updateCards() {
    const rect = section.getBoundingClientRect();
    const startOffset = 800;
    const progress =
        Math.max(0, Math.min(1,
            (startOffset - rect.top) / 1800
        ));

    cards.forEach((card, index) => {
        const start = index * 0.2;
        const duration = 0.30;
        let cardProgress =
            (progress - start) / duration;
        cardProgress = Math.max(0, Math.min(1, cardProgress));
        const startY = window.innerHeight + 450;
        const y =
            startY - (cardProgress * startY);
        const rotation = rotations[index];
        card.style.transform =
            `translateY(${y}px) rotate(${rotation}deg)`;
    });
}

window.addEventListener('scroll', updateCards);
window.addEventListener('resize', updateCards);

updateCards();

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');

    });

});

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});