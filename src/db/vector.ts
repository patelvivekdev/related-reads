import { sql } from "drizzle-orm";
import { customType } from "drizzle-orm/sqlite-core";

export const vectorColumn = customType<{
  data: number[];
  config: { dimensions: number };
  configRequired: true;
  driverData: Buffer;
}>({
  dataType(config) {
    const dimensions = config?.dimensions ?? 768;
    return `F32_BLOB(${dimensions})`;
  },
  fromDriver(value) {
    return Array.from(new Float32Array(value.buffer));
  },
  toDriver(value) {
    return sql`vector32(${JSON.stringify(value)})`;
  },
});
