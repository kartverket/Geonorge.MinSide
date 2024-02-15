export declare const getKartkatalogApiUrl: (environment: string) => string;
export declare const getGeonorgeMenuUrl: (language: string, environment: string) => string;
export declare const fetchMenuItems: (language?: string, environment?: string) => Promise<any>;
export declare const fetchDropdownSearchResults: (searchString?: string, language?: string, environment?: string) => Promise<any[]>;
