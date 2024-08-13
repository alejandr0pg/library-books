import { create } from 'zustand';
import { IBook } from '../interfaces/books.interface';
import { persist } from 'zustand/middleware';

interface IState {
  books: IBook[]; // Array de libros
  addFavorite: (book: IBook) => void; // Método para agregar un libro a favoritos
  removeFavorite: (book: IBook) => void; // Método para eliminar un libro de favoritos
  isFavorite: (book: IBook) => (state: IState) => boolean; // Método para verificar si un libro es favorito
}

// Crea el store usando persist
export const useMyFavoriteStore = create<IState>()(
  persist(
    (set) => ({
      books: [], // Inicializa la lista de libros como un array vacío
      addFavorite: (book: IBook) =>
        set((state: IState) => ({ books: [...state.books, book] })), // Agrega el libro a la lista
      removeFavorite: (book: IBook) =>
        set((state: IState) => ({
          books: state.books.filter(
            (item: { ISBN: string }) => item.ISBN !== book.ISBN
          ), // Filtra y elimina el libro de la lista
        })),
      isFavorite: (book: IBook) => (state: IState) =>
        state.books.some((item) => item.ISBN === book.ISBN), // Verifica si el libro está en la lista
    }),
    {
      name: 'favorite-books-storage', // Nombre del storage en localStorage
      getStorage: () => localStorage, // Opcional: puedes especificar otro tipo de almacenamiento
    }
  )
);
