import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/api/apidata.service';

import { WorkItems } from '../interfaces/work-items';

@Component({
    selector: 'app-my-works',
    templateUrl: './my-works.component.html',
    styleUrls: ['./my-works.component.scss'],
})
export class MyWorksComponent implements OnInit {
    public workItems: WorkItems[];

    constructor(private apiClient: ApidataService) {}

    ngOnInit() {
        this.loadWork();
    }

    // appel du service apidataservice
    public async loadWork() {
        this.apiClient
            .getWorks()
            .subscribe(
                (data: WorkItems[]) => (this.workItems = data),
                error => console.error(error)
            );
    }
}
