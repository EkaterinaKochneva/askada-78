var inputs = document.querySelectorAll('.input');
if (inputs.length > 0) { 
    inputs.forEach(input => {
        const inputNative = input.querySelector('.input__native');
        inputNative.addEventListener('input', function() {
            if (this.value) {
                input.classList.add('is-value');
            } else if (input.classList.contains('is-value')) {
                input.classList.remove('is-value');
            }                
        });
    });
}