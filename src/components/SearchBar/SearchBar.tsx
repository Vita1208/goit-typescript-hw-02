import { FormEvent } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  handleSearch: (query: string) => void;
}

export default function SearchBar({ handleSearch }: SearchBarProps) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.namedItem("search") as HTMLInputElement;
    const trimmedQuery = query.value.trim();
    handleSearch(trimmedQuery);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

