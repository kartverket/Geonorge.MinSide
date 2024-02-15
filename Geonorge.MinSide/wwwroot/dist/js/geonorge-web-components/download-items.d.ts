import { CustomElement, CustomElementOptions, DispatchEmitter } from 'super-custom-elements';
interface DownloadItem extends Object {
    name: string;
    organizationName: string;
    uuid: string;
}
interface DownloadItemsOptions extends CustomElementOptions {
    active?: boolean;
    onDownloadItemsChange?: () => void;
}
export declare class DownloadItems extends CustomElement {
    private static readonly elementSelector;
    private downloadButton;
    private downloadIcon;
    private downloadIconCounter;
    private downloadItemListContainer;
    private downloadItems;
    id: string;
    environment: string;
    language: string;
    showList: boolean;
    preventRedirect: boolean;
    onOpenEmptyDownloadItemsList: DispatchEmitter;
    onDownloadItemsChange: DispatchEmitter;
    constructor();
    setup(options?: DownloadItemsOptions): void;
    connectedCallback(): void;
    updateDomElements(): void;
    getUpdatedDownloadItems(): void;
    disconnectedCallback(): void;
    hideListContainer: () => void;
    clickOutsideDownloadItemsContainer(event: MouseEvent): void;
    renderDownloadItemsCounter(): void;
    renderDownloadItems: (downloadItems: Array<DownloadItem>) => void;
    buttonClicked(event: MouseEvent): void;
    removeDownloadItemClicked(event: MouseEvent): void;
    showListChanged(): void;
    downloadItemsChanged(): void;
    languageChanged(): void;
    preventRedirectChanged(): void;
    static setup(selector: string, options: DownloadItemsOptions): void;
}
export {};
