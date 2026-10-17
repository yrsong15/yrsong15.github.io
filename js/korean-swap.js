// Touch screens have no hover: a tap on a .ko-swap link shows the Korean word briefly, then follows the link.
(function(){
    if (!window.matchMedia('(hover: none)').matches) return;
    var links = document.querySelectorAll('a.ko-swap');
    links.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            link.classList.add('show-ko');
            setTimeout(function(){ window.location.href = link.href; }, 400);
        });
    });
    window.addEventListener('pageshow', function(){
        links.forEach(function(l){ l.classList.remove('show-ko'); });
    });
})();
