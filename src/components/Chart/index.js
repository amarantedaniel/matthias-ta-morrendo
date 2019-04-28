import React from 'react'
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

const Chart = ({ data }) => (
  <ResponsiveContainer width="95%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Line type="monotone" dataKey="glicose" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
)

export default Chart
