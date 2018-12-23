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
    public categ = 'all';

    // use for activate/deactivate the active class on link
    public selAll = true;
    public selDevDesign = false;
    public sel2d = false;
    public sel3d = false;

    constructor(private apiClient: ApidataService) {}

    ngOnInit() {
        this.loadWork(this.categ);
    }

    // appel du service apidataservice
    public async loadWork(cat: string) {
        this.apiClient.getWorks().subscribe(
            (data: WorkItems[]) => {
                if (cat !== 'all') {
                    const workI = [];
                    data.forEach((el: WorkItems) => {
                        if (el.categorie === cat) {
                            workI.push(el);
                        }
                    });
                    // console.log(workI);
                    this.workItems = workI;
                } else {
                    this.workItems = data;
                }
            },
            error => console.error(error)
        );
    }

    selectCat($event) {
        switch ($event) {
            case 'all': {
                this.selAll = true;
                this.selDevDesign = false;
                this.sel2d = false;
                this.sel3d = false;
                break;
            }
            case 'dev - web design': {
                this.selAll = false;
                this.selDevDesign = true;
                this.sel2d = false;
                this.sel3d = false;
                break;
            }
            case '2d': {
                this.selAll = false;
                this.selDevDesign = false;
                this.sel2d = true;
                this.sel3d = false;
                break;
            }
            case '3d': {
                this.selAll = false;
                this.selDevDesign = false;
                this.sel2d = false;
                this.sel3d = true;
                break;
            }
        }
        this.categ = $event;
        this.loadWork(this.categ);
    }
}
