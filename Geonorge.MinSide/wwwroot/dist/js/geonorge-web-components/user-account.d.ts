import { CustomElement, CustomElementOptions, DispatchEmitter } from "super-custom-elements";
interface UserAccountOptions extends CustomElementOptions {
    active?: boolean;
    onClick?: () => void;
    onSignInClick?: () => void;
    onSignOutClick?: () => void;
    onNorwegianLanguageSelect?: () => void;
    onEnglishLanguageSelect?: () => void;
}
export declare class UserAccount extends CustomElement {
    private static readonly elementSelector;
    private userAccountContent;
    private userAccountItems;
    private userAccountListContainer;
    id: string;
    environment: string;
    language: string;
    signinurl: string;
    signouturl: string;
    organization: string;
    userinfo: string;
    isloggedin: boolean;
    showmenu: boolean;
    hasAuthenticationFunction: boolean;
    onSignInClick: DispatchEmitter;
    onSignOutClick: DispatchEmitter;
    onNorwegianLanguageSelect: DispatchEmitter;
    onEnglishLanguageSelect: DispatchEmitter;
    constructor();
    setup(options?: UserAccountOptions): void;
    connectedCallback(): void;
    shouldShowAuthenticationButton(): boolean;
    disconnectedCallback(): void;
    hideListContainer: () => void;
    clickOutsideUserAccountItemsContainer(event: MouseEvent): void;
    renderLoginButton(): void;
    renderLogoutButton(): void;
    renderUserButton(): void;
    renderUserAccountItems(): void;
    buttonClicked(event: MouseEvent): void;
    showMenuChanged(): void;
    hasAuthenticationFunctionChanged(): void;
    isLoggedInChanged(): void;
    languageChanged(): void;
    organizationChanged(): void;
    userInfoChanged(): void;
    static setup(selector: string, options: UserAccountOptions): void;
}
export {};
