// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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
});

var subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;


var topMenuLinks = document.querySelectorAll('#top-menu a');
var showingSubMenu = false;
topMenuEl.addEventListener('click', function (el) {
    el.preventDefault();
    var linkEl = el.target;
    if (linkEl.tagName !== 'A') return;
    // console.log(linkEl.textContent);
    if (linkEl.classList.contains('active')) {
        linkEl.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = 0;
        return;
    }

    topMenuLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    linkEl.classList.add('active');

    var linkObject = menuLinks.find(function (data) {
        return data.text === linkEl.textContent;
    })
    // console.log(linkObject.subLinks);
    showingSubMenu = 'subLinks' in linkObject;
    // console.log(showingSubMenu);
    if (showingSubMenu) {
        buildSubMenu(linkObject.subLinks);
        subMenuEl.style.top = '100%';
    } else {
        subMenuEl.style.top = '0';
    }
    //if about clicked
    if (!showingSubMenu) h1.innerHTML = linkEl.text;
});

subMenuEl.addEventListener('click', function (el) {
    el.preventDefault();
    var linkEl = el.target;
    if (linkEl.tagName !== 'A') return;
    // console.log(linkEl.innerHTML);
    showingSubMenu = false;
    subMenuEl.style.top = 0;

    topMenuLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    h1.innerHTML = linkEl.text;


});

function buildSubMenu(linkObject) {
    subMenuEl.innerHTML = '';
    linkObject.forEach(function (link) {
        var subA = document.createElement('a');
        subA.setAttribute('href', link.href);
        subA.innerHTML = link.text;
        subMenuEl.appendChild(subA);
    });
}
