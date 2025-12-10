<script lang="ts">
  import FlickeringGridBackground from "../magic_ui/components/flickering-grid-background.svelte";
  import PixelCard from "./pixelCard.svelte";

  let {
    label,
    colors,
    outlinedIcon,
    filledIcon,
  }: {
    label: string;
    colors: string[];
    outlinedIcon: string;
    filledIcon: string;
  } = $props();
</script>

<PixelCard 
  {colors}
  gap={4}
  speed={20}
  className="group"
>
  <div
    class="absolute inset-0 bg-gradient-to-t rounded-lg from-gray-950 to-[85%]"
  ></div>
  <div
    class="absolute inset-0"
    style="background:radial-gradient(42.89% 50% at 50% 50%, rgb(19 19 22 / 0.6) 8.57%, rgb(19 19 22 / 0) 100%)"
  ></div>
  <div class="relative flex w-full flex-col items-center">
    <div
      class="relative aspect-[46/56] w-[calc(32/16*1rem)] max-w-[40%] translate-y-4 transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0 no-hover:translate-y-0"
    >
      {@html outlinedIcon}
      {@html filledIcon}
    </div>
    <div
      class="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-75 group-focus:opacity-100 group-focus:delay-75 no-hover:opacity-100"
    >
      {label}
    </div>
  </div>
</PixelCard>