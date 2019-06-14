const toggle_visibility = (id) => {
    if (window.innerWidth < 1050) {
       var e = document.getElementById(id);
       if (e.style.display == 'block') {
          e.style.display = 'none';

       } else {
          e.style.display = 'block';
       }
    }
}