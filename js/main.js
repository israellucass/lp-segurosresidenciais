// ========================================
// Configurações Globais
// ========================================
const CONFIG = {
    scrollOffset: 80,
    phraseInterval: 2500,
};

// ========================================
// Frases Rotativas (Hero)
// ========================================
function initPhraseRotation() {
    const phrases = ["Sem burocracia", "Sem boleto novo", "Direto na conta de luz"];
    const phraseEl = document.getElementById('phrase');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        phraseEl.style.opacity = '0';
        phraseEl.style.transform = 'translateY(10px)';

        setTimeout(() => {
            phraseEl.textContent = phrases[currentIndex];
            phraseEl.style.opacity = '1';
            phraseEl.style.transform = 'translateY(0)';
        }, 300);
    }, CONFIG.phraseInterval);
}

// ========================================
// Scroll para Seções
// ========================================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToForm() {
    scrollToSection('contact-form');
}

// ========================================
// Validação de Formulário
// ========================================
function handleFormSubmit(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const whatsapp = document.getElementById('whatsapp');
    const acceptTerms = document.getElementById('acceptTerms');

    const errors = {
        fullName: !fullName.value.trim(),
        whatsapp: !whatsapp.value.trim(),
        acceptTerms: !acceptTerms.checked,
    };

    // Mostrar/ocultar erros
    toggleError('fullName', errors.fullName);
    toggleError('whatsapp', errors.whatsapp);
    toggleError('acceptTerms', errors.acceptTerms);

    if (errors.fullName || errors.whatsapp || errors.acceptTerms) {
        return false;
    }

    // Sucesso
    console.log('Form submitted:', {
        fullName: fullName.value,
        whatsapp: whatsapp.value,
        cpf: document.getElementById('cpf').value,
        isTitular: document.getElementById('isTitular').checked,
        acceptTerms: acceptTerms.checked,
    });

    showSuccessMessage();

    // Reset após 3 segundos
    setTimeout(() => {
        document.getElementById('contact-form-el').reset();
        hideSuccessMessage();
    }, 3000);

    return false;
}

function toggleError(fieldId, hasError) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);

    if (hasError) {
        input.classList.add('error');
        if (error) error.classList.add('visible');
    } else {
        input.classList.remove('error');
        if (error) error.classList.remove('visible');
    }
}

// ========================================
// Mensagem de Sucesso
// ========================================
function showSuccessMessage() {
    const message = document.getElementById('success-message');
    message.classList.add('visible');
}

function hideSuccessMessage() {
    const message = document.getElementById('success-message');
    message.classList.remove('visible');
}

document.getElementById('success-message')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('success-message__close')) {
        hideSuccessMessage();
    }
});

// ========================================
// Máscara de CPF
// ========================================
function initCPFMask() {
    const cpfInput = document.getElementById('cpf');
    if (!cpfInput) return;

    cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (value.length > 3) {
            value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        }

        e.target.value = value;
    });
}

// ========================================
// Máscara de WhatsApp
// ========================================
function initWhatsAppMask() {
    const whatsappInput = document.getElementById('whatsapp');
    if (!whatsappInput) return;

    whatsappInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 10) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/(\d{2})(\d{5})/, '($1) $2');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d+)/, '($1) $2');
        }

        e.target.value = value;
    });
}

// ========================================
// Play Video (placeholder)
// ========================================
function playVideo() {
    alert('Vídeo "Sorte que Transforma" - funcionalidade de reprodução será implementada');
}

// ========================================
// Scroll Reveal (animação ao scroll)
// ========================================
function initScrollReveal() {
    const elements = document.querySelectorAll('.hero__content, .contact-form__info, .contact-form__card, .comparison__left, .comparison__right, .video-section__content, .plans__content, .cta-final__content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initPhraseRotation();
    initCPFMask();
    initWhatsAppMask();
    initScrollReveal();
    console.log('Landing page inicializada!');
});
