import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/api/apidata.service';

interface WorkItems {
    name: string;
    imgUrl: string;
    categorie: string;
    url: string;
    gitUrl: string;
}

@Component({
    selector: 'app-my-works',
    templateUrl: './my-works.component.html',
    styleUrls: ['./my-works.component.scss'],
})
export class MyWorksComponent implements OnInit {
    public workItems: WorkItems[];

    constructor(private apiClient: ApidataService) {
        document.cookie = 'XSRF-TOKEN=server-generated-token';
    }

    ngOnInit() {
        this.loadWork();
    }

    // appel du service apidataservice pour utiliser axios
    public async loadWork(): Promise<void> {
        try {
            this.workItems = await this.apiClient.get<WorkItems[]>({
                url: '../../assets/data/workitems.json',
            });
        } catch (error) {
            console.error(error);
        }
    }
}
