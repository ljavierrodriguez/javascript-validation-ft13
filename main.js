window.onload = function(){
    let formLogin = document.querySelector('#formLogin');

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        let form = event.target;
        let { email, password, rememberme } = form;

        let regexEmail = /^[a-zA-Z0-9.!#-_]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        let regexPwd = /^[a-zA-Z0-9]{8,}$/

        if(regexEmail.test(email.value) !== true){
            email.focus()
            return;
        }
        
        if(!regexPwd.test(password.value)){
            password.focus()
            password.classList.add('is-invalid')
            return;
        }

        


        /* 
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let rememberme = document.querySelector('#rememberme');
        */




        form.submit();

    });

}


/*

        true && true = true
        true && false = false
        false && false = false

        true || true = true
        true || false = true
        false || false = false

        !true && !true = false
        !true && !false = false
        !false && !false = true

        !true || !true = false
        !true || !false = true
        !false || !false = true

*/