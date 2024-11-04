import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { vectorColumn } from "./vector";

export const blogs = sqliteTable("blogs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  embedding: vectorColumn("embedding", {
    dimensions: 1024,
  }),
});
