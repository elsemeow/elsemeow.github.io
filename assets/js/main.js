(() => {
  "use strict";

  class Utility {
    static get scrollProgress() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      return height === 0 ? 0 : Math.round((scrollTop / height) * 100);
    }

    static get isTouch() {
      return window.matchMedia("(hover: none), (pointer: coarse)").matches;
    }

    static sleep(milliseconds) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    static norm(value, min, max) {
      return (value - min) / (max - min);
    }

    static lerp(norm, min, max) {
      return (max - min) * norm + min;
    }

    static map(value, sourceMin, sourceMax, destMin, destMax) {
      return this.lerp(this.norm(value, sourceMin, sourceMax), destMin, destMax);
    }
  }

  class NavigationBackground {
    constructor(element, color, initalAlpha, activeAlpha) {
      this.element = element;
      this.color = color;
      this.initalAlpha = initalAlpha;
      this.activeAlpha = activeAlpha;

      if (Utility.scrollProgress <= 0) {
        this.resetAlpha();
      }

      this.setupEvents();
    }
  
    resetAlpha() {
      this.element.classList.replace(`bg-${this.color}/${this.activeAlpha}`, `bg-${this.color}/${this.initalAlpha}`);
    }

    setupEvents() {
      window.addEventListener("scroll", this.onScroll.bind(this), false);
    }
  
    onScroll() {
      if (Utility.scrollProgress > 0) {
        this.element.classList.replace(`bg-${this.color}/${this.initalAlpha}`, `bg-${this.color}/${this.activeAlpha}`);
      } else {
        this.resetAlpha();
      }
    }
  }

  class ScrollIndicator {
    constructor() {
      this.updateProgress();
      this.setupEvents();
    }

    updateProgress() {
      document.documentElement.style.setProperty("--scroll-progress", `${Utility.scrollProgress}%`);
    }
  
    setupEvents() {
      window.addEventListener("scroll", this.updateProgress.bind(this), false);
    }
  }

  class PageLoader {
    constructor(loaderElement, mainElement, delay) {
      this.loaderElement = loaderElement;
      this.mainElement = mainElement;
      this.delay = delay;
      this.beforeLoad();
    }

    beforeLoad() {
      this.loaderElement.classList.replace("hidden", "grid");
      this.mainElement.classList.add("opacity-0", "-translate-y-16");
      document.body.classList.add("overflow-hidden");
    }

    onLoad() {
      loader.classList.add("-translate-y-full", "opacity-0");
      Utility.sleep(this.delay).then(() => {
        loader.classList.replace("grid", "hidden")
        main.classList.remove("opacity-0", "-translate-y-16");
        document.body.classList.remove("overflow-hidden");
      });
    }
  }

  const pageLoader = new PageLoader(document.getElementById("loader"), document.getElementById("main"), 100);

  window.addEventListener("load", () => {
    new NavigationBackground(document.getElementById("navigation"), "slate-900", 0, 75);

    if (!Utility.isTouch) {
      const photo = document.getElementById("photo_move");

      new ScrollIndicator();

      if (photo) {
        window.addEventListener("mousemove", (event) => {
          const halfW = document.body.offsetWidth / 2;
          const halfH = document.body.offsetHeight / 2;
          const dx = event.clientY - halfH;
          const dy = event.clientX - halfW;
          const x = -Math.floor(Utility.map(dx, -halfH, halfH, -25, 25));
          const y = Math.floor(Utility.map(dy, -halfW, halfW, -25, 25));

          photo.style.cssText = `
            transform: perspective(1000px) rotateX(${x}deg) rotateY(${y}deg);
            transform-style: preserve-3d;
          `;
        });
      }
    }

    pageLoader.onLoad();
  });
})();
