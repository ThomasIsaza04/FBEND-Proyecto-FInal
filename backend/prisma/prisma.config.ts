import { defineConfig } from "@prisma/config";

export default defineConfig({
  database: {
    provider: "sqlite",
    url: "file:./dev.db",
  },
});
