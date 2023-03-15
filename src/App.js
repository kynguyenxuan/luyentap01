
import { useState } from "react";

// const oder = [1,2,3,4,5]
// function App() {
//! useHook trong React Hook
  // const [Info, setInfo] = useState({
  //   name: `nguyen xuan ky`,
  //   age: 24,
  //   address: `thanh khuong - thuan thanh - bac ninh`
  // })

  // const handleUpdate = () => {
  //   setInfo({
  //     ...Info,
  //     bio: `khong long vong`
  //   })
  // }

  // const [counter, setCounter] = useState(() => {
  //   const item = oder.reduce((item, cre) => {
  //     return item + cre
  //   })
  //   console.log(item);
  //   return item
  // }) //setcount ap dung tan len 1 don vi
  // chi goi lai 1 lan dau usestate(1,2,3..v.vv)
  // const handle = () => {
  //   setCounter(counter + 1)
    // setCounter(counter => counter + 1) //set counter lên 2 hoặc nhiều đơn vị
    // setCounter(counter => counter + 1)

    // setCounter(xinchao => xinchao + 1) 
    // setCounter(xinchao => xinchao + 1) //khoi tao buoc nhay

  // }
  // return (
  //   // <div className="App" style={{padding:20}}>
  //   //          {/*vi du: useState  */}
  //   //          <h1>{counter}</h1>
  //   //          <button onClick={handle}>Increase</button>
  //   // </div>
  //   <div className="App" style={{padding:20}}>
  //            {/*vi du: useState  */}
  //            <h1>{JSON.stringify(Info)}</h1>
  //            <button onClick={handleUpdate}>Increase</button>
  //   </div>
  // );
  // }
  //! two-way binling | react hooks 2021
  const gifts = 
  [
    `cpu i9`,
  `RAM 32G RGB`,
  `RGB Keyboard`
  ]
  function App() {
    const [gift, setGift] = useState()
    const clickBonus = () => {
      const index = Math.floor(Math.random() * gifts.length)
      console.log(gifts[index]);
      setGift(gifts[index])
    }
// luu y

return (
  <div className="App" style={{padding:20}}>
  {/*vi du: useState  */}
  <h1>{gift || `Chua co phan thuong`}</h1>
  <button onClick={clickBonus}>Lay Thuong</button>
</div>
)
}
export default App;
