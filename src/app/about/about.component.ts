import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    public expers: Object[] = [
        {
            workAt: 'webForce3',
            resume: 'Lorem ipsum dolor sit amet consectetur, ',
        },
        {
            workAt: 'pileMedia',
            resume: 'Lorem ipsum dolor sit amet consectetur, ',
        },
        {
            workAt: 'Entrepreneur',
            resume: 'Lorem ipsum dolor sit amet consectetur, ',
        },
    ];
    constructor() {}

    ngOnInit() {}
}
