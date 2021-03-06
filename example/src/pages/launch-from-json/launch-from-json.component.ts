import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

import {
    KiteWebAppSdk,
} from './../../../../src/index';

import {
    initBaseFormData,
} from './../../helpers/functions/index';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'launch-from-json-component',
    templateUrl: './launch-from-json.component.template.pug',
})
export class LaunchFromJsonComponent {

    public baseFormData = initBaseFormData();

    public formData = '';

    public launchFromJson() {
        if (this.formData) {
            KiteWebAppSdk.launchFromJSON({
                ...this.baseFormData,
                ...JSON.parse(this.formData),
            });
        } else {
            KiteWebAppSdk.launchFromJSON({
                ...this.baseFormData,
            });
        }
    }
}
