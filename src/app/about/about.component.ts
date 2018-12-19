import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/api/apidata.service';

interface Expers {
    workat: string;
    resume: string;
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    public expers: Expers[];

    constructor(private apiClient: ApidataService) {
        document.cookie = 'XSRF-TOKEN=server-generated-token';
    }

    ngOnInit() {
        this.loadExp();
    }

    // appel du service apidataservice pour utiliser axios
    public async loadExp(): Promise<void> {
        try {
            this.expers = await this.apiClient.get<Expers[]>({
                url: '../../assets/data/exper.json',
            });
        } catch (error) {
            console.error(error);
        }
    }
}
