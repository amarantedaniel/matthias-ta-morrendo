import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from 'components/Chart'
import './home.scss'

const App = () => {
  const [glicoseData, setGlicoseData] = useState([])

  useEffect(() => {
    fetchData()
      .then(parseGlicoseDataFromCsvResponse)
      .then(setGlicoseData)
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

const fetchData = () =>
  axios.get(
    'https://docs.google.com/spreadsheets/d/1rgUTX_90dFgdIWYj5lfooY2q8WEZfxmD6D78DsB6sew/export?exportFormat=csv',
  )

const parseGlicoseDataFromCsvResponse = ({ data }) =>
  data
    .split('\n')
    .map(point => point.split(','))
    .map(point => ({ date: point[0], glicose: point[1] }))

const getHealthStatusFromData = data => {
  const glicose = getMostRecentGlicoseValue(data)
  return getStatusFromGlicose(glicose)
}

const getMostRecentGlicoseValue = glicoseData => {
  const lastData = [...glicoseData].pop()
  return lastData && lastData.glicose
}

const getStatusFromGlicose = glicose => {
  switch (true) {
    case glicose < 60:
      return { dying: 'SIM' }
    case glicose >= 60 && glicose <= 120:
      return { dying: 'NÃO' }
    case glicose > 120:
      return { dying: 'NÃO', but: 'mas ta se fudendo' }
    default:
      return undefined
  }
}

export default App
