const removeClass = (el, classToRemove) => {
    for (let i = 0; i < el.childNodes.length; i++) {
        el.childNodes[i].classList.remove(classToRemove);
    }
};
export {removeClass}