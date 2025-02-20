## 语法

```javascript
const res = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

参数

- subscribe：用来订阅数据源的变化，接收一个回调函数，在数据源更新时调用该回调函数。
- getSnapshot：获取当前数据源的快照（当前状态）。
- getServerSnapshot?：在服务器端渲染时用来获取数据源的快照。

返回值

- 返回值：该 res 的当前快照，可以在你的渲染逻辑中使用
