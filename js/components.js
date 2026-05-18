// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const question = item.querySelector('.faq-item__question');
        const answer = item.querySelector('.faq-item__answer');

        if (question && answer) {
            question.style.cursor = 'pointer';
            question.addEventListener('click', () => {
                const isOpen = answer.style.display === 'block';
                answer.style.display = isOpen ? 'none' : 'block';
                question.classList.toggle('open');
            });
            answer.style.display = 'none';
        }
    });
}

// ========================================
// Slider de Depoimentos
// ========================================
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonials__slider');
    if (!slider) return;

    console.log('Slider de depoimentos inicializado');
}

// ========================================
// Contador animado
// ========================================
function initCounters() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let count = 0;
    const increment = target / 50;

    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(count);
        }
    }, 30);
}

// ========================================
// Formulário de contato
// ========================================
function initContactForm() {
    const form = document.querySelector('#contato form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Formulário enviado!');
    });
}

// ========================================
// Lazy Load de Imagens
// ========================================
function initLazyLoad() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    }
}

// ========================================
// Botão voltar ao topo
// ========================================
function initBackToTop() {
    const button = document.getElementById('back-to-top');
    if (!button) return;

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

// ========================================
// Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initTestimonialSlider();
    initCounters();
    initContactForm();
    initLazyLoad();
    initBackToTop();
    console.log('Componentes inicializados!');
});
