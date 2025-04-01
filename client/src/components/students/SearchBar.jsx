import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate('/course-list/' + input.trim())
    }
  };

  return (
    <form onSubmit={onSearchHandler} className="max-w-xl w-full md:h-14 h-10 flex items-center bg-white 
      border border-gray-300 rounded-md shadow-sm ">
      <img src={assets.search_icon} alt="search icon" className="md:w-auto w-10 px-3" />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className="w-full h-full outline-none text-gray-500 px-2"/>
      <button
        type="submit"
        className="bg-green-600 rounded-md text-white md:px-10 px-7 md:py-3 py-2 h-full hover:bg-green-700 ">
        Search
      </button>
    </form>
  );
};

export default SearchBar
