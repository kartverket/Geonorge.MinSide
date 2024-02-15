import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnIconOptions extends CustomElementOptions {
}
export declare class GnIcon extends CustomElement {
    private static readonly elementSelector;
    private iconElement;
    id: string;
    icon: string;
    width: string;
    height: string;
    constructor();
    setup(options?: GnIconOptions): void;
    getGeonorgeIcon(environment: string): any;
    renderIcon(icon: string): void;
    setIconWidth(width: string): void;
    setIconHeight(height: string): void;
    connectedCallback(): void;
    iconChanged(): void;
    widthChanged(): void;
    heightChanged(): void;
    static setup(selector: string, options: GnIconOptions): void;
}
export {};
