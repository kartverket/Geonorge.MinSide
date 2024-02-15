import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnSelectOptions extends CustomElementOptions {
}
export declare class GnSelect extends CustomElement {
    block: boolean;
    fullwidth: boolean;
    constructor();
    connectedCallback(): void;
    setup(options?: GnSelectOptions): void;
}
export {};
