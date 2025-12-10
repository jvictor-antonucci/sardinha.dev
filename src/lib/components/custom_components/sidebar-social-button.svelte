<script>
  import { SquareArrowOutUpRight } from "lucide-svelte";
  import { Button } from "../ui/button";

  let { icon, label, href } = $props();
</script>

<Button
  variant="ghost"
  class="w-full justify-start"
  href={href}
>
  {@render icon()}
  {label}
  <SquareArrowOutUpRight class="ml-auto" size={16} />
</Button>
