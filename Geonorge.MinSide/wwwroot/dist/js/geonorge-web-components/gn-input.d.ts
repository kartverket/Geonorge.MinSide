import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnInputOptions extends CustomElementOptions {
}
export declare class GnInput extends CustomElement {
    block: boolean;
    fullwidth: boolean;
    width: string;
    constructor();
    widthChanged(): void;
    setup(options?: GnInputOptions): void;
}
export {};
