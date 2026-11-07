declare module "aos" {
  type AosOptions = {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | "phone" | "tablet" | "mobile" | (() => boolean);
    startEvent?: string;
    debounceDelay?: number;
    throttleDelay?: number;
  };

  type Aos = {
    init: (options?: AosOptions) => void;
    refresh: (hard?: boolean) => void;
    refreshHard: () => void;
  };

  const aos: Aos;
  export default aos;
}
