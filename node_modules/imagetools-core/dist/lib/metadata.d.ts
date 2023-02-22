import { Sharp } from 'sharp';
export declare const METADATA: unique symbol;
declare module 'sharp' {
    interface Sharp {
        [METADATA]: Record<string, any>;
    }
}
export declare function setMetadata(image: Sharp, key: string, value: any): void;
export declare function getMetadata(image: Sharp, key: string): any;
