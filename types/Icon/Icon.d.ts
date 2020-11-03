/// <reference types="svelte" />

export default class Icon {
  $$prop_def: {
    /**
     * Specify the icon from `carbon-icons-svelte` to render
     * Icon size must be 16px (e.g. `Add16`, `Task16`)
     */
    render?: typeof import("carbon-icons-svelte/lib/Add16").default;

    /**
     * Set to `true` to display the skeleton state
     * @default false
     */
    skeleton?: boolean;
  };

  $$slot_def: {};

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseleave", cb: (event: WindowEventMap["mouseleave"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}