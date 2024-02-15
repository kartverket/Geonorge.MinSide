import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnAccordionOptions extends CustomElementOptions {
}
export declare class GnAccordion extends CustomElement {
    title: string;
    expanded: boolean;
    constructor();
    toggleExpand(): void;
    isExpanded(expanded: any): boolean;
    connectedCallback(): void;
    titleChanged(): void;
    expandedChanged(): void;
    setup(options?: GnAccordionOptions): void;
}
export {};
