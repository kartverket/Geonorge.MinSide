import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface StandardButtonOptions extends CustomElementOptions {
}
export declare class GeonorgeFooter extends CustomElement {
    private static readonly elementSelector;
    private geonorgeFooterElement;
    private versionTextElement;
    private geonorgeLogoElement;
    private kartverketLogoElement;
    private linkListElement;
    private aboutSiteHeader;
    private contactHeader;
    private aSolutionByText;
    private contactInfoText;
    id: string;
    environment: string;
    version: string;
    language: string;
    accessibilitystatementurl: string;
    hideaccessibilitystatementlink: boolean;
    constructor();
    setup(options?: StandardButtonOptions): void;
    addLinkListContent(linkListElement: HTMLUListElement, language: string, environment: string, accessibilitystatementurl: string, hideaccessibilitystatementlink: boolean): HTMLUListElement;
    getContactInfoText(language: string, environment: string): "\n            <p>\n            Telephone: +47 32 11 80 00<br>\n            <a title=\"post@norgedigitalt.no\" href=\"mailto:post@norgedigitalt.no\">post@norgedigitalt.no</a><br>\n            Org. nr.: 971 040 238\n            </p>\n            " | "\n            <p>\n            Telefon: 32 11 80 00<br>\n            <a title=\"post@norgedigitalt.no\" href=\"mailto:post@norgedigitalt.no\">post@norgedigitalt.no</a><br>\n            Org. nr.: 971 040 238\n            </p>\n            ";
    shouldHideAccessibilityStatementLink(hideaccessibilitystatementlink: any): boolean;
    renderLinkList(): void;
    connectedCallback(): void;
    languageChanged(): void;
    hideaccessibilitystatementlinkChanged(): void;
    accessibilitystatementurlChanged(): void;
}
export {};
