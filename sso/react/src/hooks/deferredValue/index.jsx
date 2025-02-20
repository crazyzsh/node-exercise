import React, {
  useState,
  useTransition,
  useDeferredValue,
  useMemo,
} from 'react';
import { Input, List } from 'antd';
import mockjs from 'mockjs';

export const App = () => {
  const [val, setVal] = useState('');
  const [list] = useState(() => {
    // 使用 Mock.js 生成模拟数据
    return mockjs.mock({
      'list|10000': [
        {
          'id|+1': 1,
          name: '@natural',
          address: '@county(true)',
        },
      ],
    }).list;
  });

  // 使用 deferredValue 来延迟输入
  const deferredQuery = useDeferredValue(val);

  // 使用 useMemo 来避免每次渲染时都重新过滤
  const filteredList = useMemo(() => {
    return list.filter(item => item.name.toString().includes(deferredQuery));
  }, [list, deferredQuery]);

  const isStale = deferredQuery !== val; // 检查是否为延迟状态

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ margin: '50px', width: '200px' }}>
        <Input value={val} onChange={e => setVal(e.target.value)} />
      </div>
      <List
        style={{
          opacity: isStale ? '0.2' : '1',
          transition: 'opacity 0.3s ease',
        }}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address} />
          </List.Item>
        )}
        dataSource={filteredList}
      />
    </div>
  );
};

export default App;
