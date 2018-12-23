import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
interface ImgInfos {
    imgUrl: string;
    showImg: boolean;
}
@Component({
    selector: 'app-workitem',
    templateUrl: './workitem.component.html',
    styleUrls: ['./workitem.component.scss'],
})
export class WorkitemComponent implements OnChanges {
    @Input() workItems: object;

    public imgInfos: ImgInfos;
    public show = false;

    constructor() {}

    ngOnChanges(change: SimpleChanges) {
        this.show = false;
        this.imgInfos = {
            imgUrl: '',
            showImg: true,
        };
        setTimeout(() => (this.show = true), 200);
    }

    sendInfo($event) {
        this.imgInfos = {
            imgUrl: $event,
            showImg: false,
        };
        // console.log(this.imgInfos);
    }
}
