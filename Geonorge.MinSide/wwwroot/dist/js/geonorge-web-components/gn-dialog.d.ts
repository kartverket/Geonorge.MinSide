import { CustomElement, CustomElementOptions } from "super-custom-elements";
interface GnDialogOptions extends CustomElementOptions {
}
export declare class GnDialog extends CustomElement {
    show: boolean;
    nopadding: boolean;
    width: string;
    overflow: string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleClickOutside: (event: any) => void;
    hideDialog: () => void;
    shouldShowDialog(show: any): boolean;
    shouldHaveNoPadding(noPadding: any): boolean;
    keyDownFunction: (event: any) => any;
    showMenuChanged(): void;
    nopaddingChanged(): void;
    overflowChanged(): void;
    widthChanged(): void;
    setup(options?: GnDialogOptions): void;
}
export {};
