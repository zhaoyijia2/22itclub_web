export type Gallery = {
  id: number;
  title: string;
  image: string;
  category: "award" | "group" | "other";
  created_at: string;
};