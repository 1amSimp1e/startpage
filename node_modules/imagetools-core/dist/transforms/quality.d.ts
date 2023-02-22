import { TransformOption } from '../types';
export interface QualityOptions {
    quality: string;
}
export declare const getQuality: TransformOption<QualityOptions, number>;
