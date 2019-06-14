const fadeIn = (element) => {
   element.classList.add('show');
   element.classList.remove('hide');
}

const fadeOut = (element) => {
  element.classList.add('hide');
  element.classList.remove('show');
}

const toggle_visibility = (id) => {
    
    const descriptionDiv = document.getElementById(id);
    
    if (window.innerWidth < 1050) {
        if (descriptionDiv.className.indexOf('hide') !== -1) {
            fadeIn(descriptionDiv);
        } else {
            fadeOut(descriptionDiv);
        }
    }
}