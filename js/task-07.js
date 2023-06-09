const fontSizeRange = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

fontSizeRange.value = fontSizeRange.min;

const handleChangeFontSize = (event) => {
    const fontSize = event.currentTarget.value;
    textEl.style.fontSize = `${fontSize}px`;
};

fontSizeRange.addEventListener('input', handleChangeFontSize)