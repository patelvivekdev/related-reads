"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

type BlogPost = {
  slug: string;
  title: string;
};

export function BlogSidebar() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    // Fetch blog posts
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="px-4 text-lg font-semibold">My Blog</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {posts.map((post) => (
            <SidebarMenuItem key={post.slug}>
              <SidebarMenuButton
                asChild
                isActive={pathname === `/blog/${post.slug}`}
              >
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
