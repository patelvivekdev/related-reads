import { getAllBlogsTitle } from '@/lib/blogs';
import { AppSidebar } from './app-sidebar';

export default function Sidebar() {
  const blogs = getAllBlogsTitle();

  return <AppSidebar blogsPromise={blogs} />;
}
