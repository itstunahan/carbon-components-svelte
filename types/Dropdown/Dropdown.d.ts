/// <reference types="svelte" />

type DropdownItemId = string;

type DropdownItemText = string;

interface DropdownItem {
  id: DropdownItemId;
  text: DropdownItemText;
}

export default class Dropdown {
  $$prop_def: svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> & {
    /**
     * Set the dropdown items
     * @default []
     */
    items?: DropdownItem[];

    /**
     * Override the display of a dropdown item
     * @default (item) => item.text || item.id
     */
    itemToString?: (item: DropdownItem) => string;

    /**
     * Specify the selected item index
     */
    selectedIndex?: number;

    /**
     * Specify the type of dropdown
     * @default "default"
     */
    type?: "default" | "inline";

    /**
     * Specify the size of the dropdown field
     */
    size?: "sm" | "lg" | "xl";

    /**
     * Set to `true` to open the dropdown
     * @default false
     */
    open?: boolean;

    /**
     * Set to `true` to use the inline variant
     * @default false
     */
    inline?: boolean;

    /**
     * Set to `true` to enable the light variant
     * @default false
     */
    light?: boolean;

    /**
     * Set to `true` to disable the dropdown
     * @default false
     */
    disabled?: boolean;

    /**
     * Specify the title text
     * @default ""
     */
    titleText?: string;

    /**
     * Set to `true` to indicate an invalid state
     * @default false
     */
    invalid?: boolean;

    /**
     * Specify the invalid state text
     * @default ""
     */
    invalidText?: string;

    /**
     * Specify the helper text
     * @default ""
     */
    helperText?: string;

    /**
     * Specify the list box label
     */
    label?: string;

    /**
     * Override the default translation ids
     */
    translateWithId?: (id: any) => string;

    /**
     * Set an id for the list box component
     */
    id?: string;

    /**
     * Specify a name attribute for the list box
     */
    name?: string;

    /**
     * Obtain a reference to the button HTML element
     * @default null
     */
    ref?: null | HTMLButtonElement;
  };

  $$slot_def: {};

  $on(eventname: "select", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}