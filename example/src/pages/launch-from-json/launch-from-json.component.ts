import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

import {
    KiteWebAppSdk,
} from './../../../../index';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'launch-from-json-component',
    styleUrls: [
        './launch-from-json.component.scss',
    ],
    templateUrl: './launch-from-json.component.template.pug',
})
export class LaunchFromJsonComponent {

    public formData = {
        appStateJSONString: '',
        baseUrl: 'http://dev-wall-art.kite.ly/canon/',
    };

    public launchFromJson() {
        KiteWebAppSdk.launchFromJSON({
            ...this.formData,
        });
    }
}
