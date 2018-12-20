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
    public toggleShow = true;

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.
        this.imgUrl = changes.imgInfos.currentValue.imgUrl;
        this.toggleShow = changes.imgInfos.currentValue.showImg;
        console.log(`url: ${this.imgUrl}`);
        console.log(`showImage: ${this.toggleShow}`);
    }

    toggleShowitem() {
        this.toggleShow = !this.toggleShow;
    }
}
