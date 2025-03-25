export type Post = {
  id: number;
  title: string;
  createdAt: string;
  author: {
    name: string;
    profilePicture: string;
  };
  content: string;
  thumbnail_url: string;
  categories?: {
    name: string;
  }[];
};
