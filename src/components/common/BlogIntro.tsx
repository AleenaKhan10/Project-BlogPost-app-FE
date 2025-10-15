import React from "react";
import Socials from "./Socials";

const BlogIntro = () => {
  return (
    <div className="p-5 py-10 relative rounded-md bg-white border border-gray-200 mb-5 text-center ">
      <div
        className="bg-center bg-cover bg-no-repeat absolute top-1/2 left-1/2 -translate-1/2 h-[60%] w-[60%]"
        style={{
          backgroundImage:
            "url(https://themeger.shop/wordpress/katen/wp-content/uploads/2022/09/map-bg.png)",
          backgroundPosition: "center center",
          zIndex: "0",
        }}
      ></div>
      <div className="mb-5">
        <img
          className="m-auto"
          src="https://eumatrix.eu/assets/frontend/img/new-logo.png"
        />
      </div>

      <p className="!text-sm">
        Hello, We’re content writer who is fascinated by content fashion,
        celebrity and lifestyle. We helps clients bring the right content to the
        right people.
      </p>
      <Socials />
    </div>
  );
};

export default BlogIntro;
