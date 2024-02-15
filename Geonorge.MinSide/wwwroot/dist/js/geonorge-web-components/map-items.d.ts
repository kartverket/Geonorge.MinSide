import { CustomElement, CustomElementOptions, DispatchEmitter } from 'super-custom-elements';
interface MapItem extends Object {
    Title: string;
    Uuid: string;
}
interface MapItemsOptions extends CustomElementOptions {
    active?: boolean;
    onMapItemsChange?: () => void;
}
export declare class MapItems extends CustomElement {
    private static readonly elementSelector;
    private mapButton;
    private mapIcon;
    private mapIconCounter;
    private mapItemListContainer;
    private mapItems;
    id: string;
    environment: string;
    language: string;
    showList: boolean;
    preventRedirect: boolean;
    onOpenEmptyMapItemsList: DispatchEmitter;
    onMapItemsChange: DispatchEmitter;
    constructor();
    setup(options?: MapItemsOptions): void;
    connectedCallback(): void;
    updateDomElements(): void;
    getUpdatedMapItems(): void;
    disconnectedCallback(): void;
    hideListContainer: () => void;
    clickOutsideMapItemsContainer(event: MouseEvent): void;
    renderMapItemsCounter(): void;
    renderMapItems: (mapItems: Array<MapItem>) => void;
    buttonClicked(event: MouseEvent): void;
    removeMapItemClicked(event: MouseEvent): void;
    showMenuChanged(): void;
    mapItemsChanged(): void;
    languageChanged(): void;
    preventRedirectChanged(): void;
    static setup(selector: string, options: MapItemsOptions): void;
}
export {};
