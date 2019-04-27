import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

const Chart = ({ data }) => (
  <LineChart width={1500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Line type="monotone" dataKey="glicose" stroke="#8884d8" />
  </LineChart>
)

export default Chart
