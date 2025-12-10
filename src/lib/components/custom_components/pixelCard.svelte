<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let colors: string[] = ["#f8fafc", "#f1f5f9", "#cbd5e1"];
  export let gap: number = 5;
  export let speed: number = 35;
  export let noFocus: boolean = false;
  export let className: string = "";

  class Pixel {
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    color: string;
    speed: number;
    size: number;
    sizeStep: number;
    minSize: number;
    maxSizeInteger: number;
    maxSize: number;
    delay: number;
    counter: number;
    counterStep: number;
    isIdle: boolean;
    isReverse: boolean;
    isShimmer: boolean;

    constructor(
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      color: string,
      speed: number,
      delay: number
    ) {
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = context;
      this.x = x;
      this.y = y;
      this.color = color;
      this.speed = this.getRandomValue(0.1, 0.9) * speed;
      this.size = 0;
      this.sizeStep = Math.random() * 0.4;
      this.minSize = 0.5;
      this.maxSizeInteger = 2;
      this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
      this.delay = delay;
      this.counter = 0;
      this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
      this.isIdle = false;
      this.isReverse = false;
      this.isShimmer = false;
    }

    getRandomValue(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    draw(): void {
      const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(
        this.x + centerOffset,
        this.y + centerOffset,
        this.size,
        this.size
      );
    }

    appear(): void {
      this.isIdle = false;
      if (this.counter <= this.delay) {
        this.counter += this.counterStep;
        return;
      }
      if (this.size >= this.maxSize) {
        this.isShimmer = true;
      }
      if (this.isShimmer) {
        this.shimmer();
      } else {
        this.size += this.sizeStep;
      }
      this.draw();
    }

    disappear(): void {
      this.isShimmer = false;
      this.counter = 0;
      if (this.size <= 0) {
        this.isIdle = true;
        return;
      } else {
        this.size -= 0.1;
      }
      this.draw();
    }

    shimmer(): void {
      if (this.size >= this.maxSize) {
        this.isReverse = true;
      } else if (this.size <= this.minSize) {
        this.isReverse = false;
      }
      if (this.isReverse) {
        this.size -= this.speed;
      } else {
        this.size += this.speed;
      }
    }
  }

  function getEffectiveSpeed(value: number, reducedMotion: boolean): number {
    const min = 0;
    const max = 100;
    const throttle = 0.001;
    const parsed = parseInt(value.toString(), 10);

    if (parsed <= min || reducedMotion) {
      return min;
    } else if (parsed >= max) {
      return max * throttle;
    } else {
      return parsed * throttle;
    }
  }

  let containerRef: HTMLDivElement;
  let canvasRef: HTMLCanvasElement;
  let pixels: Pixel[] = [];
  let animationFrame: number | null = null;
  let timePrevious: number = performance.now();
  let resizeObserver: ResizeObserver | undefined;

  const reducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const initPixels = (): void => {
    if (!containerRef || !canvasRef) return;

    const rect = containerRef.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.getContext("2d");

    if (!ctx) return;

    canvasRef.width = width;
    canvasRef.height = height;
    canvasRef.style.width = `${width}px`;
    canvasRef.style.height = `${height}px`;

    const pxs: Pixel[] = [];
    for (let x = 0; x < width; x += parseInt(gap.toString(), 10)) {
      for (let y = 0; y < height; y += parseInt(gap.toString(), 10)) {
        const color = colors[Math.floor(Math.random() * colors.length)];

        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;

        pxs.push(
          new Pixel(
            canvasRef,
            ctx,
            x,
            y,
            color,
            getEffectiveSpeed(speed, reducedMotion),
            delay
          )
        );
      }
    }
    pixels = pxs;
  };

  const doAnimate = (fnName: "appear" | "disappear"): void => {
    animationFrame = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePrevious;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePrevious = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef?.getContext("2d");
    if (!ctx || !canvasRef) return;

    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    let allIdle = true;
    for (let i = 0; i < pixels.length; i++) {
      const pixel = pixels[i];
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle && animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
    }
  };

  const handleAnimation = (name: "appear" | "disappear"): void => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    animationFrame = requestAnimationFrame(() => doAnimate(name));
  };

  const onMouseEnter = (): void => handleAnimation("appear");
  const onMouseLeave = (): void => handleAnimation("disappear");

  const onFocus = (e: FocusEvent): void => {
    if (
      e.currentTarget &&
      e.relatedTarget &&
      (e.currentTarget as Element).contains(e.relatedTarget as Node)
    )
      return;
    handleAnimation("appear");
  };

  const onBlur = (e: FocusEvent): void => {
    if (
      e.currentTarget &&
      e.relatedTarget &&
      (e.currentTarget as Element).contains(e.relatedTarget as Node)
    )
      return;
    handleAnimation("disappear");
  };

  onMount(() => {
    initPixels();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        initPixels();
      });
      if (containerRef) {
        resizeObserver.observe(containerRef);
      }
    }
  });

  onDestroy(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  });

  // Reactive statement to reinitialize when props change
  $: if (containerRef && canvasRef) {
    initPixels();
  }
</script>

<div
  bind:this={containerRef}
  class="h-[140px] w-[120px] relative overflow-hidden grid place-items-center aspect-[4/5] border border-[#27272a] rounded-[8px] isolate transition-colors duration-200 ease-[cubic-bezier(0.5,1,0.89,1)] select-none {className}"
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:focus={noFocus ? undefined : onFocus}
  on:blur={noFocus ? undefined : onBlur}
  tabindex={noFocus ? -1 : 0}
  role="button"
>
  <canvas bind:this={canvasRef} class="w-full h-full block absolute inset-0"
  ></canvas>
  <div class="relative z-10 flex items-center justify-center h-full w-full">
    <slot />
  </div>
</div>
