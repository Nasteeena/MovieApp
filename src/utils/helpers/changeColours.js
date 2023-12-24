export const changeColours = (theme) => {
    const root = document.querySelector(':root');

    const cssVariables = ['header', 'background', 'button', 'card', 'buttonHover'];

    cssVariables.forEach((element)=> {
        root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
    });
}; 