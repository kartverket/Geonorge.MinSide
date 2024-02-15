import { CustomElement, CustomElementOptions, DispatchEmitter } from 'super-custom-elements';
interface SearchTypeSelectorOptions extends CustomElementOptions {
    onSearchTypeChange?: () => void;
}
export declare class SearchTypeSelector extends CustomElement {
    private static readonly elementSelector;
    private searchTypeSelector;
    private metadataNameElement;
    private metadataCounterElement;
    private articleNameElement;
    private articleCounterElement;
    id: string;
    metadataresultsfound: string;
    articlesresultsfound: string;
    language: string;
    searchtype: string;
    onSearchTypeChange: DispatchEmitter;
    constructor();
    setup(options?: SearchTypeSelectorOptions): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updateNameElements(language: string): void;
    handleSearchTypeOnChange(event: InputEvent): void;
    languageChanged(): void;
    metadataResultsFoundChanged(): void;
    articlesResultsFoundChanged(): void;
    searchTypeChanged(): void;
    static setup(selector: string, options: SearchTypeSelectorOptions): void;
}
export {};
