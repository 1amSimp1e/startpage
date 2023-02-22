import sharp from 'sharp';
import { ImageConfig } from './types';
export declare function loadImage(path: string): sharp.Sharp;
export declare function generateImageID(url: URL, config: ImageConfig): string;
