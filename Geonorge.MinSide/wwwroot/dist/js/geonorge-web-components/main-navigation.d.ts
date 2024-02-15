import { CustomElement, CustomElementOptions, DispatchEmitter } from "super-custom-elements";
interface MainNavigationOptions extends CustomElementOptions {
    active?: boolean;
    onClick?: () => void;
    onSearch?: () => void;
    onOpenEmptyMapItemsList?: () => void;
    onOpenEmptyDownloadItemsList?: () => void;
    onSearchTypeChange?: () => void;
    onSignInClick?: () => void;
    onSignOutClick?: () => void;
    onNorwegianLanguageSelect?: () => void;
    onEnglishLanguageSelect?: () => void;
    onDownloadItemsChange?: () => void;
    onMapItemsChange?: () => void;
}
export declare class MainNavigation extends CustomElement {
    private static readonly elementSelector;
    private searchField;
    private searchTypeSelector;
    private logoElement;
    private mainMenu;
    private mapItemsElement;
    private downloadItemsElement;
    id: string;
    environment: string;
    language: string;
    searchstring: string;
    searchtype: string;
    metadataresultsfound: string;
    articlesresultsfound: string;
    signinurl: string;
    signouturl: string;
    englishurl: string;
    norwegianurl: string;
    maincontentid: string;
    isloggedin: boolean;
    showmenu: boolean;
    showsearchtypeselector: boolean;
    staticposition: boolean;
    noshadow: boolean;
    onSearch: DispatchEmitter;
    onSearchTypeChange: DispatchEmitter;
    onSignInClick: DispatchEmitter;
    onSignOutClick: DispatchEmitter;
    onNorwegianLanguageSelect: DispatchEmitter;
    onEnglishLanguageSelect: DispatchEmitter;
    onDownloadItemsChange: DispatchEmitter;
    onMapItemsChange: DispatchEmitter;
    constructor();
    setup(options?: MainNavigationOptions): void;
    getGeonorgeLogoVariant(environment: string): any;
    shouldShowSearchTypeSelector(showsearchtypeselector: any): boolean;
    connectedCallback(): void;
    isLoggedInChanged(): void;
    languageChanged(): void;
    environmentChanged(): void;
    metadataResultsFoundChanged(): void;
    articlesResultsFoundChanged(): void;
    searchTypeChanged(): void;
    showSearchTypeSelectorChanged(): void;
    searchStringChanged(): void;
    mainContentIdChanged(): void;
    static setup(selector: string, options: MainNavigationOptions): void;
}
export {};
