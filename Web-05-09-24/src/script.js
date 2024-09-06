document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const btn = document.querySelector('button');
    
    function validateField(field) {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label) {
            const errorSpan = label.querySelector('.error-message');
            if (field.value.trim()) {
                if (errorSpan) {
                    errorSpan.remove();
                }
                field.style.border = '1px solid lightgray';
            } else {
                if (!errorSpan) {
                    const newErrorSpan = document.createElement('span');
                    newErrorSpan.textContent = ' Este campo é obrigatório.';
                    newErrorSpan.classList.add('error-message');
                    label.appendChild(newErrorSpan);
                }
                field.style.border = '1px solid red';
            }
        }
    }
    
    const fields = form.querySelectorAll('input[required], textarea[required]');
    fields.forEach(field => {
        field.addEventListener('blur', () => validateField(field));
    });
    
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        fields.forEach(field => {
            const label = form.querySelector(`label[for="${field.id}"]`);
            if (label) {
                const errorSpan = label.querySelector('.error-message');
                if (field.value.trim()) {
                    if (errorSpan) {
                        errorSpan.remove();
                    }
                    field.style.border = '1px solid lightgray';
                } else {
                    isValid = false;
                    if (!errorSpan) {
                        const newErrorSpan = document.createElement('span');
                        newErrorSpan.textContent = ' Este campo é obrigatório.';
                        newErrorSpan.classList.add('error-message');
                        label.appendChild(newErrorSpan);
                    }
                    field.style.border = '1px solid red';
                }
            }
        });
        
        if (isValid) {
            alert('Mensagem enviada com sucesso!');
        }
    });
});
