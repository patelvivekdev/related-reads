import { Pencil, Trash2 } from 'lucide-react';

import { Collapsible } from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function NavBlogs({
  blogs,
}: {
  blogs: {
    slug?: string;
    title: string;
  }[];
}) {
  if (blogs.length === 0) {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>All blogs</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <span>No blogs found</span>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>All blogs</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {blogs.map((blog) => (
            <Collapsible key={blog.slug}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={`/${blog.slug}`}>
                    <span>{blog.title ? blog.title : blog.slug}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuAction showOnHover>
                  <span className="flex flex-row gap-2">
                    <Pencil className="w-4 h-4" />
                    <Trash2 className="w-4 h-4" />
                  </span>
                </SidebarMenuAction>
              </SidebarMenuItem>
            </Collapsible>
          ))}
          {/* <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem> */}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
