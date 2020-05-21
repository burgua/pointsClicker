const checkDelay = 300;

const clickRewardButton = () => {
    const buttonsCollection = document.getElementsByClassName('tw-button--success');
    const buttons = [].slice.call(buttonsCollection);

    if (buttons && buttons.length) {
        buttons[0].click();
    }
};

setInterval(clickRewardButton, checkDelay);
