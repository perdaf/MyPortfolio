import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public toggle: Boolean = false;

    public menus = [
        { name: 'home', url: '/home' },
        { name: 'about me', url: '/about' },
        { name: 'my work', url: '/myWorks' },
        { name: 'my blog', url: '/blog' },
        { name: 'contact', url: '/contact' },
    ];

    constructor() {}

    ngOnInit() {}

    toggleMenu(delai: number) {
        setTimeout(() => {
            this.toggle = !this.toggle;
        }, delai);
    }
}
