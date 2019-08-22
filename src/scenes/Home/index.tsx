import React, { useState, useEffect } from 'react'
import Chart from 'components/Chart'
import { fetchGlicoseData } from 'data/api'
import { getHealthStatusFromData } from 'data/glicose'
import { GlicoseData } from 'data'
import './home.scss'

const App = () => {
  const [glicoseData, setGlicoseData] = useState<Array<GlicoseData>>([])
  const [dataCount, setDataCount] = useState<number>(5)

  useEffect(() => {
    fetchGlicoseData().then(setGlicoseData)
  }, [])

  const status = getHealthStatusFromData(glicoseData)

  return (
    <div className="home">
      <h1>Matthias ta morrendo?</h1>
      <span>{status && status.dying}</span>
      <span>{status && status.but}</span>
      <input
        type="range"
        min={1}
        max={100}
        value={dataCount}
        onChange={event => setDataCount(parseInt(event.target.value))}
      />
      <Chart data={glicoseData} count={dataCount} />
    </div>
  )
}

export default App
