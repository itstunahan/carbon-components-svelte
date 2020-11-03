/// <reference types="svelte" />

export default class Header {
  $$prop_def: svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> & {
    /**
     * Set to `false` to hide the side nav by default
     * @default true
     */
    expandedByDefault?: boolean;

    /**
     * Set to `true` to open the side nav
     * @default false
     */
    isSideNavOpen?: boolean;

    /**
     * Specify the ARIA label for the header
     */
    uiShellAriaLabel?: string;

    /**
     * Specify the `href` attribute
     */
    href?: string;

    /**
     * Specify the company name
     */
    company?: string;

    /**
     * Specify the platform name
     * Alternatively, use the named slot "platform" (e.g. <span slot="platform">...</span>)
     * @default ""
     */
    platformName?: string;

    /**
     * Obtain a reference to the HTML anchor element
     * @default null
     */
    ref?: null | HTMLAnchorElement;
  };

  $$slot_def: {
    default: {};
    ["skip-to-content"]: {};
    platform: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}