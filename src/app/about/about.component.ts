import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/api/apidata.service';
import { Expers } from '../interface/expers';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    public expers: Expers[];

    constructor(private apiClient: ApidataService) {}

    ngOnInit() {
        this.loadExp();
    }

    // appel du service apidataservice
    public async loadExp() {
        this.apiClient
            .getExpers()
            .subscribe(
                (data: Expers[]) => (this.expers = data),
                error => console.error(error)
            );
    }
}
