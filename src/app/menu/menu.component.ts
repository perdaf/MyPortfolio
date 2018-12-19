import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/api/apidata.service';

import { Menus } from '../interfaces/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public toggle = false;
    public menus: Menus[];

    constructor(private apiClient: ApidataService) {}

    ngOnInit() {
        this.loadMenu();
    }

    // appel du service apidataservice
    public loadMenu() {
        this.apiClient
            .getMenu()
            .subscribe(
                (data: Menus[]) => (this.menus = data),
                error => console.error(error)
            );
    }

    toggleMenu(delai: number) {
        setTimeout(() => {
            this.toggle = !this.toggle;
        }, delai);
    }
}
