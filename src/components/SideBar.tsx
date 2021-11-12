import { useState, useEffect } from 'react';

import { Button } from '../components/Button';

import { api } from '../services/api';

import '../styles/sidebar.scss';

import { GenreResponseProps } from "../App";

interface SideBarProps {
  selectedGenreId: number,
  setSelectedGenreId: (newGenreId: number) => void;
}

export function SideBar({ selectedGenreId, setSelectedGenreId }: SideBarProps) {
  // Complete aqui
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}