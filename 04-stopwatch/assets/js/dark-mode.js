/*Variáveis*/
const switchModeButton = document.querySelector(".switch-theme > input")
const switchModeIcon = document.querySelector(".switch-theme i")
const symbols = document.querySelectorAll("i.material-icons")
const watchDisplay = document.querySelector(".watch")

/*Event listeners*/
switchModeButton.onclick = switchMode
window.onload = function () {
    const mode = localStorage.getItem("theme")
    //Aplicando o tema do cronômetro ao iniciar a aplicação com base no localStorage
    switch (mode) {
        case "dark":
            switchModeButton.checked = true
            applyMode(true)
            break
        case "light":
            switchModeButton.checked = false
            applyMode(false)
            break
        default:
            return
    }
}

/*Funções*/
function switchMode(event) {
    const checked = event.target.checked
    checked ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light")
    applyMode(checked)
}
function applyMode(checked) {
    if (checked) {
        switchModeIcon.innerHTML = "light_mode" //Alterando o ícone do botão de tema
        for (let symbol of symbols) {
            symbol.classList.add("white")
        }
        document.documentElement.classList.add("dark-mode") //Alterando as cores settadas no body
        watchDisplay.classList.add("dark-mode") //Acrescentando animação de luzes no display do relógio
    } else {
        switchModeIcon.innerHTML = "dark_mode" //Alterando o ícone do botão de tema
        for (let symbol of symbols) {
            symbol.classList.remove("white")
        }
        document.documentElement.classList.remove("dark-mode") //Alterando as cores settadas no body
        watchDisplay.classList.remove("dark-mode") //Acrescentando animação de luzes no display do relógio
    }
}
