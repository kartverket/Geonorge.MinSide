import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnLabelOptions extends CustomElementOptions {
}
export declare class GnLabel extends CustomElement {
    block: boolean;
    constructor();
    setup(options?: GnLabelOptions): void;
}
export {};
