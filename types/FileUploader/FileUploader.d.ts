/// <reference types="svelte" />

export default class FileUploader {
  $$prop_def: svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> & {
    /**
     * Specify the file uploader status
     * @default "uploading"
     */
    status?: "uploading" | "edit" | "complete";

    /**
     * Specify the accepted file types
     * @default []
     */
    accept?: string[];

    /**
     * Obtain the uploaded file names
     * @default []
     */
    files?: string[];

    /**
     * Set to `true` to allow multiple files
     * @default false
     */
    multiple?: boolean;

    /**
     * Override the default behavior of clearing the array of uploaded files
     * @constant
     * @default () => { files = []; }
     */
    clearFiles?: () => any;

    /**
     * Specify the label description
     * @default ""
     */
    labelDescription?: string;

    /**
     * Specify the label title
     * @default ""
     */
    labelTitle?: string;

    /**
     * Specify the kind of file uploader button
     * @default "primary"
     */
    kind?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";

    /**
     * Specify the button label
     * @default ""
     */
    buttonLabel?: string;

    /**
     * Specify the ARIA label used for the status icons
     * @default "Provide icon description"
     */
    iconDescription?: string;

    /**
     * Specify a name attribute for the file button uploader input
     * @default ""
     */
    name?: string;
  };

  $$slot_def: {};

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseleave", cb: (event: WindowEventMap["mouseleave"]) => void): () => void;
  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: "keydown", cb: (event: WindowEventMap["keydown"]) => void): () => void;
  $on(eventname: "add", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: "remove", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}