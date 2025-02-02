<script>
  import { BriefcaseBusiness, FolderKanban, Github, House, Linkedin, Mail, NotepadText, PocketKnife, SquareArrowOutUpRight, User } from "lucide-svelte";
  import * as Avatar from "./ui/avatar";
  import { Button } from "./ui/button";
  import { Separator } from "./ui/separator";

  import { page } from "$app/state";
</script>

<div class="pb-12 hidden lg:block">
  <div class="space-y-4 py-4">
    {#if page.url.pathname !== '/'}
    <div class="px-3 py-2 flex w-full items-center">
      <Avatar.Root>
        <Avatar.Image src='https://avatars.githubusercontent.com/u/50591879?v=4' alt='Profile photo'/>
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
      <Button variant={page.url.pathname === '/' ? "secondary" : "ghost"} class="w-full justify-start" href='/'>
        <House class="mr-2" size={16} />
        Home
      </Button>
      <Button variant={page.url.pathname === '/about-me' ? "secondary" : "ghost"} class="w-full justify-start" href='/about-me'>
        <User class="mr-2" size={16} />
        About me
      </Button>
      <Button variant={page.url.pathname === '/career' ? "secondary" : "ghost"} class="w-full justify-start" href='/career'>
        <BriefcaseBusiness class="mr-2" size={16} />
        Career
      </Button>
      <Button variant={page.url.pathname === '/projects' ? "secondary" : "ghost"} class="w-full justify-start" href='/projects'>
        <FolderKanban class="mr-2" size={16} />
        Projects
      </Button>
      <Button variant={page.url.pathname === '/tools-tecnologies' ? "secondary" : "ghost"} class="w-full justify-start" href='/tools-tecnologies'>
        <PocketKnife class="mr-2" size={16} />
        Tools & Tecnologies
      </Button>
    </div>
    <div class="px-3 py-2">
      <p class="ml-2 mb-2 text-sm text-muted-foreground">Content</p>
      <Button variant={page.url.pathname === '/blog' ? "secondary" : "ghost"} class="w-full justify-start" href='/blog'>
        <NotepadText class="mr-2" size={16} />
        Blog
      </Button>
    </div>
    <div class="px-3 py-2">
      <p class="ml-2 mb-2 text-sm text-muted-foreground">Social Networks</p>
      <Button variant="ghost" class="w-full justify-start" href='https://linkedin.com/in/jvictor-antonucci'>
        <Linkedin class="mr-2" size={16} />
        Linkedin
        <SquareArrowOutUpRight class="ml-auto" size={16}/>
      </Button>
      <Button variant="ghost" class="w-full justify-start" href='https://github.com/jvictor-antonucci'>
        <Github class="mr-2" size={16} />
        GitHub
        <SquareArrowOutUpRight class="ml-auto" size={16}/>
      </Button>
      <Button variant="ghost" class="w-full justify-start" href='mailto:jvictor.antonucci@gmail.com'>
        <Mail class="mr-2" size={16} />
        E-mail
        <SquareArrowOutUpRight class="ml-auto" size={16}/>
      </Button>
    </div>
  </div>
</div>
