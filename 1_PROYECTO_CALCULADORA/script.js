const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonText = boton.textContent;

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const result = eval(pantalla.textContent);

                if (!isFinite(result)) {
                    throw new Error("Error");
                }

                pantalla.textContent = result;
            } catch (error) {
                pantalla.textContent = "Error";
            }
            return;
        }

        if (
            (pantalla.textContent === "0" || pantalla.textContent === "Error") &&
            !isOperator(botonText)
        ) {
            pantalla.textContent = botonText;
        } else if (isOperator(botonText) && isOperator(pantalla.textContent.slice(-1))) {
    
            pantalla.textContent = pantalla.textContent.slice(0, -1) + botonText;
        } else {
            pantalla.textContent += botonText;
        }

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }
    });
});


function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}
