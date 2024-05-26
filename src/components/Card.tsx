import React from "react";
import { Product } from "../models/models";

interface ICard {
  item: Product;
  text: string;
  handleFunc: (item: Product) => void;
}

const Card: React.FC<ICard> = ({ item, text, handleFunc }) => {
  return (
    <div className="w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex flex-col justify-between text-lg bg-white rounded-lg dark:bg-gray-400 dark:text-white">
      <div className="p-4 ">
        <h1 className="text-gray-900 uppercase text-xl">{item.title}</h1>
        <p className="text-sm mt-1 line-clamp-1 hover:line-clamp-none">
          {item.description}
        </p>
      </div>
      <img
        className="p-2 min-h-[150px] max-h-[150px] object-contain"
        src={item.images[0]}
        alt={item.title}
      />
      <div className="flex justify-between items-center bg-gray-700 p-3">
        <h2 className="text-gray-100 font-bold ">£{item.price}</h2>
        <p className="text-xl text-gray-200 capitalize border-indigo-600 bg-inherit p-1 border-collapse rounded-lg ">
          {" "}
          {item.category}{" "}
        </p>
        <button
          className="bg-gray-300 p-1 rounded-lg "
          onClick={() => handleFunc(item)}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Card;
