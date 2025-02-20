import React, { useReducer } from 'react';

const initData = [
  { name: '小满(只)', price: 100, count: 1, id: 1, isEdit: false },
  { name: '中满(只)', price: 200, count: 1, id: 2, isEdit: false },
  { name: '大满(只)', price: 300, count: 1, id: 3, isEdit: false },
];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return state.map(item =>
        item.id === action.id ? { ...item, count: item.count + 1 } : item
      );

    case 'SUB':
      return state.map(item => {
        if (item.id === action.id) {
          const newCount = Math.max(0, item.count - 1);
          return { ...item, count: newCount };
        }
        return item;
      });

    case 'DELETE':
      return state.filter(item => item.id !== action.id);

    case 'EDIT':
      return state.map(item =>
        item.id === action.id ? { ...item, isEdit: !item.isEdit } : item
      );

    case 'UPDATE_NAME':
      return state.map(item =>
        item.id === action.id ? { ...item, name: action.newName } : item
      );

    default:
      return state;
  }
}

function Reducer() {
  const [data, dispatch] = useReducer(reducer, initData);

  return (
    <table cellPadding={0} cellSpacing={0} width={600} border={1}>
      <thead>
        <tr>
          <th>物品</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td align="center">
              {item.isEdit ? (
                <input
                  value={item.name}
                  onChange={e =>
                    dispatch({
                      type: 'UPDATE_NAME',
                      id: item.id,
                      newName: e.target.value,
                    })
                  }
                  onBlur={() => dispatch({ type: 'EDIT', id: item.id })}
                  autoFocus
                />
              ) : (
                <span>{item.name}</span>
              )}
            </td>
            <td align="center">{item.price * item.count}</td>
            <td align="center">
              <button
                onClick={() => dispatch({ type: 'SUB', id: item.id })}
                disabled={item.count === 0}
              >
                -
              </button>
              <span>{item.count}</span>
              <button onClick={() => dispatch({ type: 'ADD', id: item.id })}>
                +
              </button>
            </td>
            <td align="center">
              <button onClick={() => dispatch({ type: 'EDIT', id: item.id })}>
                {item.isEdit ? '保存' : '编辑'}
              </button>
              <button onClick={() => dispatch({ type: 'DELETE', id: item.id })}>
                删除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}></td>
          <td align="center">
            总价:
            {data.reduce((prev, next) => prev + next.price * next.count, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Reducer;
