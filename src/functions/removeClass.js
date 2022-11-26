const removeClass = (el, classToRemove) => {
  for (let i = 0; i < el.childNodes.length; i += 1) {
    el.childNodes[i].classList.remove(classToRemove);
  }
};
export default removeClass;
