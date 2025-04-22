import { Planet } from "./Planet";

export interface Wishlist {
  wishlist: Planet[];
  removeFromWishlist: (planet: Planet) => void;
  loadWishlist: () => void;
}