class DigitalClockApp {
    constructor() {
        this.fontSize = 12;
        this.is24HourFormat = true;
        this.showSeconds = true;
        this.glowEnabled = true;

        this.weekdays = [
            "Pühapäev",
            "Esmaspäev",
            "Teisipäev",
            "Kolmapäev",
            "Neljapäev",
            "Reede",
            "Laupäev"
        ];

        this.hoursElement = document.getElementById("hours");
        this.minutesElement = document.getElementById("minutes");
        this.secondsElement = document.getElementById("seconds");
        this.secondsSeparatorElement =
            document.getElementById("secondsSeparator");

        this.weekdayElement = document.getElementById("weekday");
        this.dayElement = document.getElementById("day");
        this.monthElement = document.getElementById("month");
        this.yearElement = document.getElementById("year");

        this.clockContainer = document.getElementById("clockContainer");
        this.clockCard = document.getElementById("clockCard");

        this.textColorPicker = document.getElementById("textColorPicker");
        this.backgroundColorPicker =
            document.getElementById("backgroundColorPicker");
        this.fontSelector = document.getElementById("fontSelector");
        this.positionSelector = document.getElementById("positionSelector");

        this.biggerButton = document.getElementById("biggerButton");
        this.smallerButton = document.getElementById("smallerButton");
        this.toggleFormatButton =
            document.getElementById("toggleFormatButton");
        this.toggleSecondsButton =
            document.getElementById("toggleSecondsButton");
        this.toggleGlowButton = document.getElementById("toggleGlowButton");
        this.randomThemeButton = document.getElementById("randomThemeButton");

        this.init();
    }

    init() {
        this.updateDateTime();
        this.addEventListeners();
        this.applyFontSize();
        this.applyTextColor(this.textColorPicker.value);
        this.applyBackgroundColor(this.backgroundColorPicker.value);
        this.applyFontFamily(this.fontSelector.value);
        this.applyPosition(this.positionSelector.value);

        setInterval(() => {
            this.updateDateTime();
        }, 1000);
    }
/* viide promptile:
"How to use addEventListener in JavaScript to handle button clicks
and keyboard input for changing UI elements like font size?"
*/
    addEventListeners() {
        this.biggerButton.addEventListener("click", () => {
            this.changeFontSize(1);
        });

        this.smallerButton.addEventListener("click", () => {
            this.changeFontSize(-1);
        });

        this.toggleFormatButton.addEventListener("click", () => {
            this.toggleTimeFormat();
        });

        this.toggleSecondsButton.addEventListener("click", () => {
            this.toggleSeconds();
        });

        this.toggleGlowButton.addEventListener("click", () => {
            this.toggleGlow();
        });

        this.randomThemeButton.addEventListener("click", () => {
            this.applyRandomTheme();
        });

        this.textColorPicker.addEventListener("input", (event) => {
            this.applyTextColor(event.target.value);
        });

        this.backgroundColorPicker.addEventListener("input", (event) => {
            this.applyBackgroundColor(event.target.value);
        });

        this.fontSelector.addEventListener("change", (event) => {
            this.applyFontFamily(event.target.value);
        });

        this.positionSelector.addEventListener("change", (event) => {
            this.applyPosition(event.target.value);
        });

        window.addEventListener("keydown", (event) => {
            this.handleKeyboard(event);
        });

    }

    handleKeyboard(event) {
        if (event.key === "+") {
            this.changeFontSize(1);
        }

        if (event.key === "-") {
            this.changeFontSize(-1);
        }

        if (event.key.toLowerCase() === "t") {
            this.toggleTimeFormat();
        }

        if (event.key.toLowerCase() === "s") {
            this.toggleSeconds();
        }

        if (event.key.toLowerCase() === "g") {
            this.toggleGlow();
        }
    }

    updateDateTime() {
        const now = new Date();

        this.renderTime(now);
        this.renderDate(now);
    }

    renderTime(now) {
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        if (!this.is24HourFormat) {
            hours = hours % 12 || 12;
        }

        this.hoursElement.textContent = this.formatNumber(hours);
        this.minutesElement.textContent = this.formatNumber(minutes);
        this.secondsElement.textContent = this.formatNumber(seconds);
    }

    renderDate(now) {
        const weekday = this.weekdays[now.getDay()];
        const day = this.formatNumber(now.getDate());
        const month = this.formatNumber(now.getMonth() + 1);
        const year = now.getFullYear();

        this.weekdayElement.textContent = weekday;
        this.dayElement.textContent = day;
        this.monthElement.textContent = month;
        this.yearElement.textContent = year;
    }

    formatNumber(numberValue) {
        return String(numberValue).padStart(2, "0");
    }
/* viide promptile:
"How can I dynamically change CSS properties (like color, font, size)
using JavaScript when the user interacts with input fields or buttons?"
*/
    changeFontSize(step) {
        this.fontSize += step;

        if (this.fontSize < 6) {
            this.fontSize = 6;
            alert("Kell ei saa väiksemaks minna :(");
        }

        if (this.fontSize > 18) {
            this.fontSize = 18;
            alert("Kell ei saa suuremaks minna :(");
        }

        this.applyFontSize();
    }

    applyFontSize() {
        document.documentElement.style.setProperty(
            "--clock-font-size",
            `${this.fontSize}vw`
        );
    }

    applyTextColor(colorValue) {
        document.documentElement.style.setProperty(
            "--text-color",
            colorValue
        );
        document.documentElement.style.setProperty(
            "--shadow-color",
            `${colorValue}88`
        );
    }

    applyBackgroundColor(colorValue) {
        document.documentElement.style.setProperty(
            "--bg-color",
            colorValue
        );
    }

    applyFontFamily(fontValue) {
        document.documentElement.style.setProperty(
            "--font-family",
            fontValue
        );
    }

    toggleTimeFormat() {
        this.is24HourFormat = !this.is24HourFormat;
        this.updateDateTime();
    }

    toggleSeconds() {
        this.showSeconds = !this.showSeconds;

        const displayValue = this.showSeconds ? "inline" : "none";
        this.secondsElement.style.display = displayValue;
        this.secondsSeparatorElement.style.display = displayValue;
    }

    toggleGlow() {
        this.glowEnabled = !this.glowEnabled;

        if (this.glowEnabled) {
            this.clockContainer.classList.add("glow");
        } else {
            this.clockContainer.classList.remove("glow");
        }
    }

    applyPosition(positionValue) {
        this.clockCard.classList.remove(
            "position-top",
            "position-bottom",
            "position-left",
            "position-right",
            "position-center"
        );

        switch (positionValue) {
            case "top":
                this.clockCard.classList.add("position-top");
                break;
            case "bottom":
                this.clockCard.classList.add("position-bottom");
                break;
            case "left":
                this.clockCard.classList.add("position-left");
                break;
            case "right":
                this.clockCard.classList.add("position-right");
                break;
            default:
                this.clockCard.classList.add("position-center");
        }
    }

    applyRandomTheme() {
        const randomTextColor = this.getRandomColor();
        const randomBackgroundColor = this.getRandomColor();

        this.textColorPicker.value = randomTextColor;
        this.backgroundColorPicker.value = randomBackgroundColor;

        this.applyTextColor(randomTextColor);
        this.applyBackgroundColor(randomBackgroundColor);
    }

    getRandomColor() {
        const characters = "0123456789ABCDEF";
        let color = "#";

        for (let index = 0; index < 6; index += 1) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            color += characters[randomIndex];
        }

        return color;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new DigitalClockApp();
});