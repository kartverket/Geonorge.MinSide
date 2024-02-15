import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface BreadcrumbListOptions extends CustomElementOptions {
    breadcrumbs: Array<BreadcrumbListItem>;
}
interface BreadcrumbListItem extends Object {
    name: string;
    url: string;
}
export declare class BreadcrumbList extends CustomElement {
    private static readonly elementSelector;
    private breadcrumbListElement;
    id: string;
    breadcrumbs: any;
    constructor();
    setup(options?: BreadcrumbListOptions): void;
    connectedCallback(): void;
    static addBreadcrumbListContent: (breadcrumbListElement: HTMLElement, breadcrumbs: Array<BreadcrumbListItem>) => HTMLElement;
    static renderBreadcrumbs: (breadcrumbs: Array<BreadcrumbListItem>) => void;
    renderBreadcrumbsFromAttribute: (breadcrumbs: string) => void;
    breadcrumbsChanged(): void;
    static setup(selector: string, options: BreadcrumbListOptions): void;
}
export {};
