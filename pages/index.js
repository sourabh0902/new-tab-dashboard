import Background from "@/components/Background";
import Name_modal from "@/components/Name_modal";
import React from "react";

export async function getServerSideProps() {
  // Fetching data from two different sources
  const [imagesRes] = await Promise.all([
    fetch(
      `https://api.unsplash.com/search/photos?&query=riverside&page=1&per_page=1&orientation=landscape&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    ),
  ]);

  // Parse the JSON from both responses
  const [imagesData] = await Promise.all([imagesRes.json()]);
  // console.log(imagesData);

  // Now you have both usersData and imagesData available to be passed as props
  return {
    props: {
      imagesData, // This will be available as this.props.imagesData inside the page component
    },
  };
}

// Make sure to accept the props in your page component
const Page = ({ imagesData }) => {
  return (
    <div>
      <Name_modal />
      <Background imageData={imagesData} />
    </div>
  );
};

export default Page;
