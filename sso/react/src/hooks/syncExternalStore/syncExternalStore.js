import { useSyncExternalStore } from "react"

/**
 * 
 * @param key 存储到localStorage 的key
 * @param defaultValue 默认值
 */
export const useStorage = (key, defaultValue) => {
  const subscribe = (callback) => {
    window.addEventListener('storage', (e) => {
      console.log('storage变化了', e)
      callback()
    })
    return () => window.removeEventListener('storage', callback)
  }
  //从localStorage中获取数据 如果读不到返回默认值
  const getSnapshot = () => {
    const data = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
    return data || defaultValue
  }
  //修改数据
  const setStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value))
    window.dispatchEvent(new StorageEvent('storage')) //手动触发storage事件
  }
  //返回数据
  const res = useSyncExternalStore(subscribe, getSnapshot)

  return [res, setStorage]
}