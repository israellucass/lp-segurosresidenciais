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

    // Enviar para Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbw78U36vjQDIVUWAbAuoE5ME6AZP76ERNd5zNdz3DNwYrr14ILbC1YvdvYoe3_yZM-K0A/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fullName: fullName.value,
            whatsapp: whatsapp.value,
        }),
    }).catch(() => {
        // silenciar erro de envio — formulário já foi processado
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
        if (input) input.classList.add('error');
        if (error) error.classList.add('visible');
    } else {
        if (input) input.classList.remove('error');
        if (error) error.classList.remove('visible');
    }

    if (fieldId === 'acceptTerms') {
        const checkboxCustom = input?.parentElement?.querySelector('.checkbox-custom');
        if (checkboxCustom) {
            if (hasError) checkboxCustom.classList.remove('checked');
            else checkboxCustom.classList.toggle('checked', input.checked);
        }
    }
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
// Rotator de Frases (Typed.js)
// ========================================
function initPhraseRotator() {
    new Typed('#typed-phrase', {
        strings: [
            'Sem burocracia',
            'Sem boleto novo',
            'Direto na conta de luz',
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1200,
        loop: true,
        cursorChar: '',
    });
}

// ========================================
// Inicialização
// ========================================
function initCheckboxes() {
    document.querySelectorAll('.checkbox-custom').forEach(el => {
        const icon = document.createElement('i');
        icon.className = 'ph ph-check';
        el.appendChild(icon);
    });
}

function initCheckboxToggle() {
    const checkbox = document.getElementById('acceptTerms');
    if (!checkbox) return;
    checkbox.addEventListener('change', () => {
        checkbox.parentElement.querySelector('.checkbox-custom').classList.toggle('checked', checkbox.checked);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppMask();
    initPhraseRotator();
    initCheckboxes();
    initCheckboxToggle();
    console.log('Landing page inicializada!');
});
