import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnTableOptions extends CustomElementOptions {
}
export declare class GnTable extends CustomElement {
    id: string;
    hoverable: boolean;
    constructor();
    setup(options?: GnTableOptions): void;
    static setup(selector: string, options: GnTableOptions): void;
}
export {};
