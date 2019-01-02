import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-showitem',
    templateUrl: './showitem.component.html',
    styleUrls: ['./showitem.component.scss'],
})
export class ShowitemComponent implements OnChanges {
    @Input() imgInfos;

    public imgUrl: string;
    public imgDesc: string;
    public toggleShow = true;

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        // console.log(changes);
        this.imgUrl = changes.imgInfos.currentValue.imgUrl;
        this.imgDesc = changes.imgInfos.currentValue.imgDesc;
        this.toggleShow = changes.imgInfos.currentValue.showImg;
    }

    toggleShowitem() {
        this.toggleShow = !this.toggleShow;
    }
}
