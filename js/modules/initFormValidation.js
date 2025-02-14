export default function initFormValidation() {
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const form = document.querySelector("form");

    if (phoneInput && emailInput && firstNameInput && lastNameInput && form) {
        const validatePhone = () => {
            const inputValue = phoneInput.value.replace(/\D/g, "");
            phoneInput.style.border = inputValue.length === 11 ? "2px solid #64D87F" : "2px solid red";
            return inputValue.length === 11;
        };

        const validateEmail = () => {
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isValid = emailPattern.test(emailValue);
            emailInput.style.border = isValid ? "2px solid #64D87F" : "2px solid red";
            return isValid;
        };

        const validateName = (input) => {
            const nameValue = input.value.trim();
            const namePattern = /^[A-Za-zÀ-ÿ\s]+$/;
            const isValid = namePattern.test(nameValue) && nameValue.length > 0;
            input.style.border = isValid ? "2px solid #64D87F" : "2px solid red";
            return isValid;
        };

        phoneInput.addEventListener("input", (event) => {
            let inputValue = event.target.value.replace(/\D/g, "");
            if (inputValue.length > 11) {
                inputValue = inputValue.slice(0, 11);
            }
            inputValue = inputValue.length <= 10 
                ? inputValue.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1)$2-$3") 
                : inputValue.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1)$2-$3");
            event.target.value = inputValue;
            validatePhone();
        });

        phoneInput.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                const cursorPosition = event.target.selectionStart;
                const value = event.target.value;

                if (cursorPosition > 0) {
                    const newValue = value.slice(0, cursorPosition - 1) + value.slice(cursorPosition);
                    event.target.value = newValue;

                    event.target.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
                }

                validatePhone();

                event.preventDefault();
            }

            if (!/\d/.test(event.key)) {
                event.preventDefault();
            }
        });

        emailInput.addEventListener("input", validateEmail);
        firstNameInput.addEventListener("input", () => validateName(firstNameInput));
        lastNameInput.addEventListener("input", () => validateName(lastNameInput));

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const phoneValue = phoneInput.value.replace(/\D/g, "");
            const emailValue = emailInput.value.trim();
            const firstNameValue = firstNameInput.value.trim();
            const lastNameValue = lastNameInput.value.trim();

            const isPhoneValid = validatePhone();
            const isEmailValid = validateEmail();
            const isFirstNameValid = validateName(firstNameInput);
            const isLastNameValid = validateName(lastNameInput);

            if (isPhoneValid && isEmailValid && isFirstNameValid && isLastNameValid) {
                const formData = {
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    email: emailValue,
                    phone: phoneValue
                };

                try {
                    localStorage.setItem("userData", JSON.stringify(formData));
                } catch (error) {
                    alert("Erro ao salvar no localStorage", error);
                }
            }
        });
    }
}
