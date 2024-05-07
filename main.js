window.onload = function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var nome = document.getElementById('fname').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('phone').value;

        var nomeRegex = /^[A-Za-z]{1,100}$/;
        var emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        var telefoneRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/;

        if (!nomeRegex.test(nome)) {
            alert('Nome inválido. Deve ter entre 1 e 100 caracteres e não pode conter números.');
            event.preventDefault();
        }

        if (!emailRegex.test(email)) {
            alert('Email inválido.');
            event.preventDefault();
        }

        if (!telefoneRegex.test(telefone)) {
            alert('Número de telefone inválido. Deve estar no padrão brasileiro (DD)XXXX-XXXX ou (DD)XXXXX-XXXX.');
            event.preventDefault();
        }
    });
}
