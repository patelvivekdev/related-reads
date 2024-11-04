"use client";

import * as React from "react";
import { Bot, BrainCircuit, Settings2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavBlogs } from "@/components/sidebar/nav-blogs";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Models",
      url: "#",
      icon: Bot,
    },
    {
      title: "Memories",
      url: "/memories",
      icon: BrainCircuit,
    },
    {
      title: "AI Agents",
      url: "#",
      icon: Settings2,
    },
  ],
};

interface Blog {
  title: string;
  slug: string;
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  blogsPromise: Promise<Blog[]>;
}

export function AppSidebar({ blogsPromise, ...props }: AppSidebarProps) {
  const blogs = React.use(blogsPromise);
  return (
    <Sidebar collapsible="icon" className="border-r-0" {...props}>
      <SidebarHeader>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavBlogs blogs={blogs} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
