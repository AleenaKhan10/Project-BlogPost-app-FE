import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryProps {
  category: {
    img: string;
    title: string;
    desc: string;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { img, title, desc } = category;
  return (
    <div className="p-5 border border-gray-200 rounded-md bg-white mt-2">
      <div className="flex gap-5">
        <div className="cat-img w-[60px] h-[60px] overflow-hidden rounded-md">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="cat-content flex-1">
          <strong className="text-lg">{title}</strong>
          <p className="!text-sm">{desc}</p>
          <Link
            to={"#"}
            className="flex items-center gap-2 mt-3 font-semibold text-sm hover:text-blue-600"
          >
            {" "}
            Explore Category <ArrowRight size={18} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
