import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnBadgeListOptions extends CustomElementOptions {
}
export declare class GnBadgeList extends CustomElement {
    block: boolean;
    constructor();
    setup(options?: GnBadgeListOptions): void;
}
export {};
