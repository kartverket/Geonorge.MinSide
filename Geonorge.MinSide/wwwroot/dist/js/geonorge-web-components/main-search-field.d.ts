import { CustomElement, CustomElementOptions, DispatchEmitter } from 'super-custom-elements';
import { SearchResultsResponseForType } from '../../../interfaces/search';
interface MainSearchFieldOptions extends CustomElementOptions {
    active?: boolean;
    value?: string;
    onSearchStringChange?: () => void;
    onClick?: () => void;
    onSearch?: () => void;
}
export declare class MainSearchField extends CustomElement {
    private static readonly elementSelector;
    private searchField;
    private searchFieldLabel;
    private searchButton;
    private searchResultsContainer;
    id: string;
    environment: string;
    showSearchResults: boolean;
    preventRedirect: boolean;
    searchstring: string;
    language: string;
    searchResultsResponses: Array<SearchResultsResponseForType>;
    onTextChanged: DispatchEmitter;
    onSearchStringChange: DispatchEmitter;
    onSearch: DispatchEmitter;
    constructor();
    setup(options?: MainSearchFieldOptions): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderSearchResultsForType: (searchResultsResponseForType: SearchResultsResponseForType) => string;
    renderSearchResults: (searchResultsResponses: Array<SearchResultsResponseForType>) => string;
    hideSearchResultsContainer: () => void;
    clickOutsideSearchResultsContainer(event: MouseEvent): void;
    submitSearch(): void;
    searchFieldKeyUp(event: KeyboardEvent): void;
    onSearchSubmitted(event: MouseEvent): void;
    searchStringChanged(): void;
    languageChanged(): void;
    showSearchResultsChanged(): void;
    searchResultsResponseChanged(): void;
    static setup(selector: string, options: MainSearchFieldOptions): void;
}
export {};
