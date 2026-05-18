// ========================================
// Configurações Globais
// ========================================
const CONFIG = {
    scrollOffset: 80,
};

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

    const message = document.getElementById('success-message');
    message.classList.add('visible');

    // Reset após 3 segundos
    setTimeout(() => {
        document.getElementById('contact-form-el').reset();
        message.classList.remove('visible');
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
// Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initCPFMask();
    initWhatsAppMask();
    console.log('Landing page inicializada!');
});
