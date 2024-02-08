import { useEffect, useState } from 'react';
import axios from 'axios'
import style from './App.module.css';

function App() {
  const [arrCurrencies, setArrCurrencies] = useState([]);
  const [activeCurrency, setActiveCurrensy] = useState('SelectOccupation')
  const [flag, setFlag] = useState(true)

  async function getCurrencies() {
    const responce = await axios.get('https://www.nbrb.by/API/ExRates/Currencies')
    setArrCurrencies(responce.data)
  }

  function getActiveCurrency(e) {
    setActiveCurrensy(e.target.textContent);
    setFlag(!flag)
  }

  function changeFlag() {
    setFlag(!flag)
  }

  useEffect(() => {
    getCurrencies()
  }, [])

  const resultHTML = arrCurrencies.map((el) => {
    return <p onClick={getActiveCurrency}>{el.Cur_Name}</p>
  })

  return (
    <>
      <div onClick={changeFlag} className={style.wrapper}>
        <p>{activeCurrency}</p>
        <div className={style.img}></div>
      </div>
      {flag ? <div className={style.list}>{resultHTML}</div> : null}
    </>
  );
}

export default App;
