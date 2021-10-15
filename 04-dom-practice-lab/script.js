// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
var h1 = document.createElement('h1');
h1.innerHTML = 'SEI Rocks!';
mainEl.appendChild(h1);
mainEl.classList.add('flex-ctr');

var topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

Object.values(menuLinks).forEach(function (link) {
    var a = document.createElement('a');
    a.innerHTML = link.text;
    a.setAttribute('href', link.href);
    topMenuEl.appendChild(a);
    console.log(topMenuEl);
});