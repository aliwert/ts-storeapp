import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { Product, VoidFunc } from "../models/models";
import { removeFavorites } from "../features/productsSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const handleRemove: VoidFunc = (product) => {
    const newData: Product[] = favorites.filter(
      (item) => item.id !== product.id
    );
    dispatch(removeFavorites(newData));
    toastSuccessNotify("Products succesfully removed.");
  };

  return (
    <div>
      <h1 className="font-bold text-[30px] text-white text-center m-5">
        Favorites Product Lists
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-[1rem] p-6">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            handleFunc={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
