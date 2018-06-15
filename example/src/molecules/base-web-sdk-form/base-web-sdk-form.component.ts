import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import {
    LaunchAppBaseConfigInterface,
} from './../../../../src/index';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'base-web-sdk-form-component',
    templateUrl: './base-web-sdk-form.component.template.pug',
})
export class BaseWebSdkFormComponent {
    @Input()
    public formData: LaunchAppBaseConfigInterface;

    public isShowMoreOptionsVisible = false;

    public toggleShowMoreOptions() {
        this.isShowMoreOptionsVisible = !this.isShowMoreOptionsVisible;
    }
}
