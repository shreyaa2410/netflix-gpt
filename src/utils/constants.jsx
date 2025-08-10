const USER_AVATAR =
  "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:"Bearer " + import.meta.env.VITE_TMDB_key,
  },
};

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export default USER_AVATAR;

export const OPENAI_API= import.meta.env.VITE_OPENAI_key;
