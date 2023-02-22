import { TransformFactory } from '../types';
export interface HSBOptions {
    hue: string;
    saturation: string;
    brightness: string;
}
export declare const hsb: TransformFactory<HSBOptions>;
