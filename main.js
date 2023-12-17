const getPerferedColorScheme = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light';

const colorMap = [
    {
        id: "darkMode",
        light: ["primary-5"],
        dark: ["primary-1"]
    },
    {
        id: "right",
        light: ["primary-5"],
        dark: ["primary-1"]
    }
]

function setColorScheme(darkModeControl) {
    if (darkModeControl) {
        for (let colorItem of colorMap) {
            for (let className of colorItem.dark) {
                document.getElementById(colorItem.id).classList.add(className);
            }
            for (let className of colorItem.light) {
                document.getElementById(colorItem.id).classList.remove(className);
            }
            for (let button of document.querySelectorAll('.button-black')) {
                button.classList.add("button-white");
                button.classList.remove("button-black");
            }
        }
    } else {
        for (let colorItem of colorMap) {
            for (let className of colorItem.light) {
                document.getElementById(colorItem.id).classList.add(className);
            }
            for (let className of colorItem.dark) {
                document.getElementById(colorItem.id).classList.remove(className);
            }
            for (let button of document.querySelectorAll('.button-white')) {
                button.classList.add("button-black");
                button.classList.remove("button-white");
            }
        }
    }
}

function switchColorScheme() {
    const value = document.getElementById("darkModeControl").checked;
    localStorage.setItem("darkModeControl", value);
    setColorScheme(value);
}

function setInitialColorScheme() {
    const darkModeControl =  getPerferedColorScheme() == "dark" ? true : false;
    if (localStorage.getItem("darkModeControl") == null) {
        localStorage.setItem("darkModeControl", darkModeControl);
    }
    document.getElementById("darkModeControl").checked =  darkModeControl;
    setColorScheme(darkModeControl);
}

document.getElementById("darkModeControl").addEventListener("change", switchColorScheme);
document.getElementById("darkModeControlReset").addEventListener("click",  setInitialColorScheme)

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (event) {
    const colorScheme = event.matches;
    localStorage.setItem("darkModeControl", colorScheme);
    document.getElementById("darkModeControl").checked = colorScheme;
    setColorScheme(colorScheme);
});

setInitialColorScheme();