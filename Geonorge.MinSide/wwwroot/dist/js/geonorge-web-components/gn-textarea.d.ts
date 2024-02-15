import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnTextareaOptions extends CustomElementOptions {
}
export declare class GnTextarea extends CustomElement {
    block: boolean;
    fullwidth: boolean;
    resize: string;
    constructor();
    setup(options?: GnTextareaOptions): void;
}
export {};
