import { Component, OnInit, Input } from '@angular/core';

import { NavigationService } from '../../../services/navigation.service';

@Component({
    selector: 'app-add-new-status',
    templateUrl: './add-new-status.component.html',
    styleUrls: ['./add-new-status.component.scss']
})
export class AddNewStatusComponent implements OnInit {

    @Input() isDirectMention: boolean;
    @Input() userHandle: string;
    @Input() status: string;

    constructor(private readonly navigationService: NavigationService) {
    }
    
    ngOnInit() {
    }

    closeColumn() {
        this.navigationService.closePanel();
    }
}
