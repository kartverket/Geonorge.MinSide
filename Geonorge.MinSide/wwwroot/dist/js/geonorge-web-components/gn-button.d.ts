import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnButtonOptions extends CustomElementOptions {
}
export declare class GnButton extends CustomElement {
    color: string;
    constructor();
    setup(options?: GnButtonOptions): void;
}
export {};
