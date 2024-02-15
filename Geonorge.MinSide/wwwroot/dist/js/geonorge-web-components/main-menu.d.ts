import { CustomElement, CustomElementOptions, DispatchEmitter } from 'super-custom-elements';
interface MainMenuOptions extends CustomElementOptions {
    active?: boolean;
    onClick?: () => void;
    onSignInClick?: () => void;
    onSignOutClick?: () => void;
    onNorwegianLanguageSelect?: () => void;
    onEnglishLanguageSelect?: () => void;
}
interface MenuItem extends Object {
    Name: string;
    SubMenuItem: Array<MenuItem>;
    Url: string;
}
export declare class MainMenu extends CustomElement {
    private static readonly elementSelector;
    private menuButton;
    private menuTitle;
    private menuIcon;
    private closeIcon;
    private menuContainer;
    private menuItemListContainer;
    private menuActionsRow;
    id: string;
    language: string;
    environment: string;
    signinurl: string;
    signouturl: string;
    norwegianurl: string;
    englishurl: string;
    isloggedin: boolean;
    showmenu: boolean;
    hasAuthenticationFunction: boolean;
    hasLanguageSelectFunctions: boolean;
    menuitems: Array<MenuItem>;
    onSignInClick: DispatchEmitter;
    onSignOutClick: DispatchEmitter;
    onNorwegianLanguageSelect: DispatchEmitter;
    onEnglishLanguageSelect: DispatchEmitter;
    constructor();
    setup(options?: MainMenuOptions): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    hideMenuContainer: () => void;
    clickOutsideMenuContainer(event: MouseEvent): void;
    renderMenuItems: (menuItems: Array<MenuItem>, hierarchyLevel?: number, maxHierarchyLevel?: number) => any;
    addAuthenticationLinks(hasAuthenticationFunction?: boolean): string;
    addLanguageSelectLinks(hasLanguageSelectFunctions?: boolean): string;
    buttonClicked(event: MouseEvent): void;
    hasAuthenticationFunctionChanged(): void;
    isLoggedInChanged(): void;
    hasLanguageSelectFunctionsChanged(): void;
    languageChanged(): void;
    showMenuChanged(): void;
    menuItemsChanged(): void;
    static setup(selector: string, options: MainMenuOptions): void;
}
export {};
