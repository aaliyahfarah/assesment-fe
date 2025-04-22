import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Planet } from '../types/Planet';
import { Wishlist } from '../types/Wishlist';

const WishlistContext = createContext<Wishlist| undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Planet[]>([]);

  const loadWishlist = async () => {
    const stored = await AsyncStorage.getItem('wishlist');
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  };

  useEffect(() => {
    loadWishlist(); 
  }, []);

  const addToWishlist = async (planet: Planet) => {
    const updatedWishlist = [...wishlist, planet];
    await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  const removeFromWishlist = async (planet: Planet) => {
    const updatedWishlist = wishlist.filter(item => item.url !== planet.url);
    await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, loadWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};