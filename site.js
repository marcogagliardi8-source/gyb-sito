(function(){
  var t=document.querySelector('.menu-toggle'),n=document.getElementById('site-nav');
  if(t&&n){t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';
    t.setAttribute('aria-expanded',String(!o));t.setAttribute('aria-label',o?'Apri il menu':'Chiudi il menu');
    n.classList.toggle('open',!o);});}
  var b=document.querySelector('.map-btn');
  if(b){b.addEventListener('click',function(){var box=b.closest('.map');var f=document.createElement('iframe');
    f.className='map-frame';f.title='Mappa: Get Your Balance, Loc. Rio 4, Camerino';f.loading='lazy';
    f.referrerPolicy='no-referrer-when-downgrade';
    f.src='https://www.google.com/maps?q=Loc.+Rio+4,+62032+Camerino+MC&output=embed';
    box.innerHTML='';box.style.padding='0';box.style.border='0';box.appendChild(f);});}
})();
