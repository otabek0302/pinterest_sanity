import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "g232dcho",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: process.env.SANITY_PROJECT_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);