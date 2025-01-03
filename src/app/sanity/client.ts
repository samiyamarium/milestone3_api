import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "po8catjj",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});