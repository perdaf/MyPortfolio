import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/api/apidata.service';

interface Menus {
    name: string;
    url: string;
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public toggle = false;
    public menus: Menus[];

    constructor(private apiClient: ApidataService) {
        document.cookie = 'XSRF-TOKEN=server-generated-token';
    }

    ngOnInit() {
        this.loadMenu();
    }

    // appel du service apidataservice pour utiliser axios
    public async loadMenu(): Promise<void> {
        try {
            this.menus = await this.apiClient.get<Menus[]>({
                url: '../../assets/data/menu.json',
            });
        } catch (error) {
            console.error(error);
        }
    }

    toggleMenu(delai: number) {
        setTimeout(() => {
            this.toggle = !this.toggle;
        }, delai);
    }
}
