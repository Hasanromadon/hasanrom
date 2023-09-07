import React from "react";
import BigHeadlinethumbnail from "../../assets/blog/big-thumbnail.png";
import OutlinedButton from "../OutlinedButton";
import { useNavigate } from "react-router-dom";

const BigHeadlineCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/blog/1")}
      className="cursor-pointer grid sm:grid-cols-2 gap-4 sm:gap-10"
    >
      <div>
        <img
          className="w-full saturate-100 hover:saturate-200"
          src={BigHeadlinethumbnail}
          alt=""
        />
      </div>
      <div className="flex items-start flex-col justify-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Elevate Your Web Presence: Building an Impressive Developer Portfolio
        </h2>
        <p className="text-normal mb-6">
          In the realm of web development, where innovation and creativity
          thrive, having a noteworthy online presence is a necessity. A
          well-crafted developer portfolio isn't just a compilation of projects;
          it's a dynamic showcase of your skills, your passion, and your
          potential to create digital magic. In this article, we'll dive into
          the art of building an impressive developer portfolio that not only
          highlights your expertise but also leaves a lasting impact on anyone
          who visits it.
        </p>
        <OutlinedButton label="Read More" />
      </div>
    </div>
  );
};

export default BigHeadlineCard;
