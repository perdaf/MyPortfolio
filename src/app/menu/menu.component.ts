import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public toggle: Boolean = false;

    constructor() {}

    ngOnInit() {}

    toggleMenu(delai: number) {
        setTimeout(() => {
            this.toggle = !this.toggle;
        }, delai);
    }
}
