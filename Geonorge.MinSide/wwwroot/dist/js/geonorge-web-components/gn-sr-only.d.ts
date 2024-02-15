import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnSrOnlyOptions extends CustomElementOptions {
}
export declare class GnSrOnly extends CustomElement {
    block: boolean;
    constructor();
    setup(options?: GnSrOnlyOptions): void;
}
export {};
