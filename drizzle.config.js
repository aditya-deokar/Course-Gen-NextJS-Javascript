import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.jsx",
//   out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});