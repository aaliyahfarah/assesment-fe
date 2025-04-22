import { Planet } from "./Planet";

export interface Wishlist {
  wishlist: Planet[];
  addToWishlist: (planet: Planet) => void;
  removeFromWishlist: (planet: Planet) => void;
  loadWishlist: () => void;
}