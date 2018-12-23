import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/api/apidata.service';
import { Expers } from '../interfaces/expers';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    public expers: Expers[];

    constructor(private apiClient: ApidataService) {}

    public skills: object = [
        { name: 'node.js', skill: 80 },
        { name: 'javascript', skill: 88 },
        { name: 'angular', skill: 79 },
        { name: 'react', skill: 49 },
        { name: 'php', skill: 85 },
        { name: 'html', skill: 99 },
        { name: 'css', skill: 99 },
        { name: 'photoshop', skill: 99 },
        { name: 'illustrator', skill: 75 },
    ];

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
