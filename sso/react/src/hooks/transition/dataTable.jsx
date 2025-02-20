import React, { useState, useTransition } from 'react';

function DataTable() {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async page => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const newData = await response.json();
    console.log('newData', newData);
    setData(newData);
  };

  const handlePageChange = newPage => {
    startTransition(() => {
      setPage(newPage);
      fetchData(newPage);
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={isPending}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)} disabled={isPending}>
          Next
        </button>
      </div>
      <div>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                {item.id}-{item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DataTable;
