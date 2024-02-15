import { CustomElement, CustomElementOptions } from 'super-custom-elements';
interface NavigationTabHeadingOptions extends CustomElementOptions {
}
export declare class NavigationTabHeading extends CustomElement {
    private static readonly elementSelector;
    private tabHeadingElement;
    id: string;
    selected: boolean;
    constructor();
    setup(options?: NavigationTabHeadingOptions): void;
    connectedCallback(): void;
    _upgradeProperty(prop: any): void;
    selectedChanged(): void;
    static setup(selector: string, options: NavigationTabHeadingOptions): void;
}
export {};
