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
        }
    } else {
        for (let colorItem of colorMap) {
            for (let className of colorItem.light) {
                document.getElementById(colorItem.id).classList.add(className);
            }
            for (let className of colorItem.dark) {
                document.getElementById(colorItem.id).classList.remove(className);
            }
        }
    }
}

function switchColorScheme() {
    localStorage.setItem("darkModeControl", document.getElementById("darkModeControl").checked);
    setColorScheme(document.getElementById("darkModeControl").checked);
}

function setInitialColorScheme() {
    if (localStorage.getItem("darkModeControl") == null) {
        // localStorage.setItem("darkModeControl", getPerferedColorScheme() == "dark" ? true : false);
    }
    document.getElementById("darkModeControl").checked = localStorage.getItem("darkModeControl");
    setColorScheme(localStorage.getItem("darkModeControl"));
}

document.getElementById("darkModeControl").addEventListener("change", switchColorScheme);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (event) {
		const colorScheme = event.matches;
        localStorage.setItem("darkModeControl", colorScheme);
        document.getElementById("darkModeControl").checked = colorScheme;
        setColorScheme(colorScheme);
	});

setInitialColorScheme();