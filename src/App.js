import { useState } from 'react'
import { ToastProvider } from 'react-toast-notifications'
import Header from './components/Header'
import Content from './components/Content/Content'
import './styles/global.css'
import items from './dummy-data.json'

function App() {
  const [selectedItem, setSelectedItem] = useState(items[0])

  const handleItemChange = (item) => {
    setSelectedItem(item)
  }
  return (
    <>
      <ToastProvider placement='bottom-center'>
        <Header items={items} onItemChange={handleItemChange} />
        <Content selectedItem={selectedItem} />
      </ToastProvider>
    </>
  )
}

export default App
