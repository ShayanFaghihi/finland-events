import { useReactiveVar } from "@apollo/client";
import { wishlistVar } from "../../graphql/client";

const Wishlist = () => {
  const wishlist = useReactiveVar(wishlistVar);
  return (
    <div className="flex justify-center items-center btn-primary">
      <span>❤️</span>
      {wishlist.length}
    </div>
  );
};

export default Wishlist;
