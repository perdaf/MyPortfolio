import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
interface ImgInfos {
    imgUrl: string;
    imgDesc: string;
    showImg: boolean;
}
@Component({
    selector: 'app-workitem',
    templateUrl: './workitem.component.html',
    styleUrls: ['./workitem.component.scss'],
})
export class WorkitemComponent implements OnChanges {
    @Input() workItems: object;

    public imgInfos: ImgInfos = {
        imgUrl: '',
        imgDesc: '',
        showImg: true,
    };

    public show = false;

    constructor() {}

    ngOnChanges(change: SimpleChanges) {
        this.show = false;
        setTimeout(() => (this.show = true), 200);
    }

    sendInfo(url, desc) {
        // console.log({ url, desc });
        this.imgInfos = {
            imgUrl: url,
            imgDesc: desc,
            showImg: false,
        };
        // console.log(this.imgInfos);
    }
}
