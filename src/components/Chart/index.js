import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    glicose: 4000,
  },
  {
    glicose: 3000,
  },
  {
    glicose: 3500,
  },
]

const Chart = () => (
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="glicose" />
    <YAxis />
    <Line type="monotone" dataKey="glicose" stroke="#8884d8" />
  </LineChart>
)

export default Chart
