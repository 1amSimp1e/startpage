import { Sharp } from 'sharp';
import { ImageTransformation, TransformResult } from '../types';
export declare function applyTransforms(transforms: ImageTransformation[], image: Sharp, removeMetadata?: boolean): Promise<TransformResult>;
