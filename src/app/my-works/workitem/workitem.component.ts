import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-workitem',
    templateUrl: './workitem.component.html',
    styleUrls: ['./workitem.component.scss'],
})
export class WorkitemComponent implements OnInit {
    @Input() workItems: object;

    constructor() {}

    ngOnInit() {}
}
