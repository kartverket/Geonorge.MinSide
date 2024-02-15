import { CustomElement, CustomElementOptions, DispatchEmitter } from "super-custom-elements";
interface NavigationTabsOptions extends CustomElementOptions {
    active?: boolean;
    onClick?: () => void;
}
interface TabHeadingElement extends HTMLElement {
    selected: boolean;
}
interface TabContentElement extends HTMLElement {
    hidden: boolean;
}
export declare class NavigationTabs extends CustomElement {
    private static readonly elementSelector;
    private tabHeadingSlot;
    private tabContentSlot;
    static get observedAttributes(): string[];
    id: string;
    selectedtab: string;
    onSearch: DispatchEmitter;
    constructor();
    setup(options?: NavigationTabsOptions): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onSlotChange(): void;
    linkPanels(): void;
    setSelectTab(newTabHeading: TabHeadingElement): void;
    getTabHeadingElements(): TabHeadingElement[];
    getTabContentElements(): TabContentElement[];
    getTabContentForTabHeading(tabHeadingElement: any): TabContentElement;
    reset(): void;
    _onClick(event: any): void;
    static setup(selector: string, options: NavigationTabsOptions): void;
}
export {};
