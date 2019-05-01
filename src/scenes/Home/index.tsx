import React, { useState, useEffect } from 'react'
import Chart from 'components/Chart'
import { fetchGlicoseData } from 'data/api'
import { getHealthStatusFromData } from 'data/glicose'
import { GlicoseData } from 'data'
import './home.scss'

const App = () => {
  const [glicoseData, setGlicoseData] = useState<Array<GlicoseData>>([])

  useEffect(() => {
    fetchGlicoseData().then(setGlicoseData)
  }, [])

  const status = getHealthStatusFromData(glicoseData)

  return (
    <div className="home">
      <h1>Matthias ta morrendo?</h1>
      <span>{status && status.dying}</span>
      <span>{status && status.but}</span>
      <Chart data={glicoseData} />
    </div>
  )
}

export default App
