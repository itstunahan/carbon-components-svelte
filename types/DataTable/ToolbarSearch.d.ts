/// <reference types="svelte" />

export default class ToolbarSearch {
  $$prop_def: {
    /**
     * Specify the value of the search input
     * @default ""
     */
    value?: string;

    /**
     * Set to `true` to expand the search bar
     * @default false
     */
    expanded?: boolean;

    /**
     * Set to `true` to keep the search bar expanded
     * @default false
     */
    persistent?: boolean;

    /**
     * Specify the tabindex
     * @default "0"
     */
    tabindex?: string;

    /**
     * Obtain a reference to the input HTML element
     * @default null
     */
    ref?: null | HTMLInputElement;
  };

  $$slot_def: {};

  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}