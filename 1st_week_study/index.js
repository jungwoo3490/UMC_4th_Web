document.addEventListener('scroll', function() {
    const nav = document.getElementById('totalheaderwrapper');
    const innerbar = document.getElementById('secondheader');
    const navheight = nav.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > navheight) {
        innerbar.classList.add('headerscrolled');
        innerbar.classList.remove('headerfixed');
    } else {
        innerbar.classList.add('headerfixed');
        innerbar.classList.remove('headerscrolled')
    }
});