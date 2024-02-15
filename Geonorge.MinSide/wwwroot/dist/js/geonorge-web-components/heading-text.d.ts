import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface HeadingTextOptions extends CustomElementOptions {
}
export declare class HeadingText extends CustomElement {
    size: string;
    tag: string;
    underline: boolean;
    constructor();
    setup(options?: HeadingTextOptions): void;
}
export {};
