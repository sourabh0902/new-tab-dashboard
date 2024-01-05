import Background from "@/components/Background.js";
import React from "react";

const page = () => {
  //unsplash API key
  const unsplash_key = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;

  //Base URl for image
  const API_URL = "https://api.unsplash.com/search/photos";

  return (
    <div>
      <Background unsplash_key={unsplash_key} API_URL={API_URL} />
    </div>
  );
};

export default page;
