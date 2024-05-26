import {
  addFavorites,
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";
import Card from "../components/Card";
import { EventFunc, Product, Products } from "../models/models";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList, favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );

      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  console.log(error);
  useEffect(() => {
    getData();
  }, [search]);
  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (product: Product) => {
    if (favorites.filter((item) => item.id === product.id).length === 0) {
      dispatch(addFavorites(product));
      toastSuccessNotify("Product succesfully added favorites!");
    } else {
      toastWarnNotify("Already included in preferred selections!");
    }
  };
  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        <div className="mt-52">
          <p className="text-center text-black">Products're coming</p>
        </div>
      ) : error ? (
        <div className="mt-52">
          <p className="text-center text-black">Something went wrong ❓</p>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-[20px] p-3  bg-red-500 bg-neutral-red dark:bg-gray-900 py-3 dark:text-red">
          {productsList.map((item) => (
            <Card
              key={item.id}
              text="💟"
              item={item}
              handleFunc={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
