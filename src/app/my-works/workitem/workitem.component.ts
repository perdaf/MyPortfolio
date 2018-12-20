import { Component, OnInit, Input } from '@angular/core';
interface ImgInfos {
    imgUrl: string;
    showImg: boolean;
}
@Component({
    selector: 'app-workitem',
    templateUrl: './workitem.component.html',
    styleUrls: ['./workitem.component.scss'],
})
export class WorkitemComponent implements OnInit {
    @Input() workItems: object;

    public imgInfos: ImgInfos;

    constructor() {}

    ngOnInit() {
        this.imgInfos = {
            imgUrl: '',
            showImg: true,
        };
        console.log(this.imgInfos);
    }

    sendInfo($event) {
        this.imgInfos = {
            imgUrl: $event,
            showImg: false,
        };
        console.log(this.imgInfos);
    }
}
