import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import { searchMovies } from '../services/movieService';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();

  const [options, setOptions] = useState<{ value: string }[]>([]);

  const handleSearch = async (value: string) => {
    if (value) {
      const { results } = await searchMovies(value, 1);

      const arr = results.map((movie: any) => ({
        label: movie.title,
        value: movie.id,
      }));

      arr.push({ label: 'Daha Fazla Sonuç Göster', value: `more_${value}` });
      setOptions(arr);
    } else {
      setOptions([]);
    }
  };

  function onSelect(value: string) {
    if (typeof value == 'string' && value.includes('more'))
      return navigate(`/list?query=${value.split('_')[1]}`);

    navigate('/movie/' + value);
  }

  return (
    <AutoComplete
      options={options}
      onSearch={handleSearch}
      style={{ width: 200 }}
      onSelect={onSelect}
    >
      <Input.Search placeholder='Film Ara' />
    </AutoComplete>
  );
};

export default SearchBar;
