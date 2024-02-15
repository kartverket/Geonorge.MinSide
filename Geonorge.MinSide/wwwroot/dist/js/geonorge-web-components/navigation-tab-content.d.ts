import { CustomElement, CustomElementOptions } from 'super-custom-elements';
interface NavigationTabContentOptions extends CustomElementOptions {
}
export declare class NavigationTabContent extends CustomElement {
    private static readonly elementSelector;
    static get observedAttributes(): string[];
    id: string;
    constructor();
    setup(options?: NavigationTabContentOptions): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static setup(selector: string, options: NavigationTabContentOptions): void;
}
export {};
