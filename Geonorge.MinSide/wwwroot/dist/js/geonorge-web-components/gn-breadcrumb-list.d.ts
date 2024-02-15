import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnBreadcrumbListOptions extends CustomElementOptions {
}
export declare class GnBreadcrumbList extends CustomElement {
    block: boolean;
    fullwidth: boolean;
    constructor();
    setup(options?: GnBreadcrumbListOptions): void;
}
export {};
