import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from 'components/Chart'
import './home.scss'

const App = () => {
  const [glicose, setGlicose] = useState()

  useEffect(() => {
    fetchData()
      .then(parseLastGlicoseFromResponse)
      .then(setGlicose)
  }, [])

  return (
    <div>
      <h1>{glicose > 120 ? 'sim' : 'não'}</h1>
      <Chart />
    </div>
  )
}

const fetchData = () =>
  axios.get(
    'https://docs.google.com/spreadsheets/d/1rgUTX_90dFgdIWYj5lfooY2q8WEZfxmD6D78DsB6sew/export?exportFormat=csv',
  )

const parseLastGlicoseFromResponse = response =>
  response.data
    .split('\n')
    .slice(-1)[0]
    .split(',')
    .slice(-1)[0]

export default App
