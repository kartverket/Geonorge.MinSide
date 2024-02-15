export interface SearchResultsForType extends Object {
    Title: string;
    TypeTranslated: string;
    ShowDetailsUrl: string;
    Uuid: string;
}
export interface SearchResultsResponseForType extends Object {
    NumFound: number;
    Results: Array<SearchResultsForType>;
    searchResultsType: string;
}
