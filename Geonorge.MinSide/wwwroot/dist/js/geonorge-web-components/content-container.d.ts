import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface ContentContainerOptions extends CustomElementOptions {
}
export declare class ContentContainer extends CustomElement {
    fullwidth: boolean;
    constructor();
    setup(options?: ContentContainerOptions): void;
}
export {};
