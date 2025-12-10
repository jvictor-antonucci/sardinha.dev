<script>
  import { Button } from "../ui/button";
  import { page } from "$app/state";

  let { icon, label, pathname } = $props();
</script>

<Button
    variant={page.url.pathname === pathname ? "secondary" : "ghost"}
    class="w-full justify-start"
    href={pathname}
  >
    {@render icon()}
    {label}
  </Button>
