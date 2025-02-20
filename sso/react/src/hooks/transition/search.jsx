import React, { useState, useTransition } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = e => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    startTransition(() => {
      // 模拟延迟的搜索逻辑
      const filteredResults = searchDatabase(newQuery);
      setResults(filteredResults);
    });
  };

  const searchDatabase = query => {
    // 模拟一个耗时的搜索
    return ['item1', 'item2', 'item3'].filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {isPending ? (
        <p>Searching...</p>
      ) : (
        <ul>
          {results.map(r => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
