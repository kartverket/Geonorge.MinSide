import { SearchResultsForType } from 'interfaces/search';
export declare const getKartkatalogUrl: (environment: string) => string;
export declare const getGeonorgeUrl: (language: string, environment: string) => string;
export declare const getGeonorgeNedlastingUrl: (environment: string) => string;
export declare const convertTextToUrlSlug: (text?: string) => string;
export declare const renderDropdownResultLink: (searchResult: SearchResultsForType, resultType: string, searchString: string, environment: string, pushToDataLayer?: Function) => string;
