import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-works',
    templateUrl: './my-works.component.html',
    styleUrls: ['./my-works.component.scss'],
})
export class MyWorksComponent implements OnInit {
    public workItems: Object[] = [
        {
            name: 'Bottle juice',
            imgUrl: '../../assets/img/bottle juice.jpg',
            categorie: '3d',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
        {
            name: 'coiffeuse project',
            imgUrl: '../../assets/img/comp001.jpg',
            categorie: '3d',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
        {
            name: 'Baya tropical',
            imgUrl: '../../assets/img/design_baya_tropical.png',
            categorie: 'dev - web Design',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
        {
            name: 'Baya tropical',
            imgUrl: '../../assets/img/design_baya_tropical.png',
            categorie: 'dev - web Design',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
        {
            name: 'Baya tropical',
            imgUrl: '../../assets/img/design_baya_tropical.png',
            categorie: 'dev - web Design',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
        {
            name: 'Baya tropical',
            imgUrl: '../../assets/img/design_baya_tropical.png',
            categorie: 'dev - web Design',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
        {
            name: 'Baya tropical',
            imgUrl: '../../assets/img/design_baya_tropical.png',
            categorie: 'dev - web Design',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
        {
            name: 'Baya tropical',
            imgUrl: '../../assets/img/design_baya_tropical.png',
            categorie: 'dev - web Design',
            url: 'www.work1.com',
            gitUrl: 'www.git-work1.com',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
