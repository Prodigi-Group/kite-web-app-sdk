import {
    LaunchAppBaseConfigInterface,
} from './index';

export interface LaunchAppFromJSONInterface
extends LaunchAppBaseConfigInterface {
    appStateJSONString?: string;
}
