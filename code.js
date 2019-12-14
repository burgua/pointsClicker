const selector = '.tw-button.tw-button--success.tw-interactive';
const clickDelay = 100;
const checkDelay = 3000;

const clicker = () => {
    const buttons = $(selector);
    if (buttons.length > 0) {
        const button = buttons[0];
        button.click();
    }
};

const timedOutCliker = () => {
    setTimeout(clicker, clickDelay);
};

setInterval(timedOutCliker, checkDelay);
