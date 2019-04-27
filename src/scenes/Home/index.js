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

  return (
    <div className="home">
      <h1>Matthias ta morrendo?</h1>
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

export default App
