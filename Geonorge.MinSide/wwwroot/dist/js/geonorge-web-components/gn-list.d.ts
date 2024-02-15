import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnListOptions extends CustomElementOptions {
}
export declare class GnList extends CustomElement {
    block: boolean;
    constructor();
    setup(options?: GnListOptions): void;
}
export {};
