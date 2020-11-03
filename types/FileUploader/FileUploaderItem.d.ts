/// <reference types="svelte" />

export default class FileUploaderItem {
  $$prop_def: svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> & {
    /**
     * Specify the file uploader status
     * @default "uploading"
     */
    status?: "uploading" | "edit" | "complete";

    /**
     * Specify the ARIA label used for the status icons
     * @default ""
     */
    iconDescription?: string;

    /**
     * Set to `true` to indicate an invalid state
     * @default false
     */
    invalid?: boolean;

    /**
     * Specify the error subject text
     * @default ""
     */
    errorSubject?: string;

    /**
     * Specify the error body text
     * @default ""
     */
    errorBody?: string;

    /**
     * Set an id for the top-level element
     */
    id?: string;

    /**
     * Specify the file uploader name
     * @default ""
     */
    name?: string;
  };

  $$slot_def: {};

  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseleave", cb: (event: WindowEventMap["mouseleave"]) => void): () => void;
  $on(eventname: "delete", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}