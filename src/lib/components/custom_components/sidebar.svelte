<script>
  import {
    BriefcaseBusiness,
    FolderKanban,
    Github,
    Home,
    House,
    Linkedin,
    Mail,
    NotepadText,
    PocketKnife,
    SquareArrowOutUpRight,
    User,
  } from "lucide-svelte";
  import * as Avatar from "../ui/avatar";
  import { Button } from "../ui/button";
  import { Separator } from "../ui/separator";

  import { page } from "$app/state";
  import SidebarButton from "./sidebar-button.svelte";
  import SidebarSocialButton from "./sidebar-social-button.svelte";
</script>

<aside
  class="fixed top-0 flex flex-col w-full md:w-72 md:h-[100dvh] z-40 border-b md:border-b-0 md:border-r"
>
  <div class="space-y-4 py-4">
    {#if page.url.pathname !== "/"}
      <div class="px-3 py-2 flex w-full items-center">
        <Avatar.Root>
          <Avatar.Image
            src="https://avatars.githubusercontent.com/u/50591879?v=4"
            alt="Profile photo"
          />
          <Avatar.Fallback>JV</Avatar.Fallback>
        </Avatar.Root>
        <div class="ml-2">
          <p class="text-sm font-medium">Sardinha.dev</p>
          <p class="text-xs text-muted-foreground">João Victor</p>
        </div>
      </div>
      <Separator></Separator>
    {/if}
    <div class="px-3 py-2">
      <SidebarButton label="Home" pathname="/">
        {#snippet icon()}<Home class="mr-2" size={16} />{/snippet}
      </SidebarButton>
      <SidebarButton label="About me" pathname="/about-me">
        {#snippet icon()}<User class="mr-2" size={16} />{/snippet}
      </SidebarButton>
      <SidebarButton label="Career" pathname="/career">
        {#snippet icon()}<BriefcaseBusiness class="mr-2" size={16} />{/snippet}
      </SidebarButton>
      <SidebarButton label="Projects" pathname="/projects">
        {#snippet icon()}<FolderKanban class="mr-2" size={16} />{/snippet}
      </SidebarButton>
      <SidebarButton label="Tools & Tecnologies" pathname="/tools-tecnologies">
        {#snippet icon()}<PocketKnife class="mr-2" size={16} />{/snippet}
      </SidebarButton>
    </div>
    <div class="px-3 py-2">
      <p class="ml-2 mb-2 text-sm text-muted-foreground">Content</p>
      <SidebarButton label="Blog" pathname="/blog">
        {#snippet icon()}<NotepadText class="mr-2" size={16} />{/snippet}
      </SidebarButton>
    </div>
    <div class="px-3 py-2">
      <p class="ml-2 mb-2 text-sm text-muted-foreground">Social Networks</p>
      <SidebarSocialButton label='Linkedin' href="https://linkedin.com/in/jvictor-antonucci">
        {#snippet icon()}
          <Linkedin class="mr-2" size={16} />
        {/snippet}
      </SidebarSocialButton>
      <SidebarSocialButton label='GitHub' href="https://github.com/jvictor-antonucci">
        {#snippet icon()}
          <Github class="mr-2" size={16} />
        {/snippet}
      </SidebarSocialButton>
      <SidebarSocialButton label='E-mail' href="mailto:jvictor.antonucci@gmail.com">
        {#snippet icon()}
          <Mail class="mr-2" size={16} />
        {/snippet}
      </SidebarSocialButton>
    </div>
  </div>
</aside>
