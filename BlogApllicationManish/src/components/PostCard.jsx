import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config.js";

function PostCard({ $id, title, featuredImage }) {
  const [imageUrl, setImageUrl] = useState(null);

useEffect(() => {
  const fetchImageUrl = async () => {
    if (featuredImage) {
      console.log("Featured Image ID:", featuredImage);
      const url = appwriteService.getFileView(featuredImage); // Switch to getFileView
      console.log("Image URL:", url);
      setImageUrl(url);
    }
  };
  fetchImageUrl();
}, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-slate-600 rounded-xl p-4 text-white">
        <div className="w-full justify-center mb-4">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="rounded-xl" />
          ) : (
            <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center">
              <span>No Image Available</span>
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;