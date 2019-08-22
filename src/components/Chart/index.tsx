import React from 'react'
import { GlicoseData } from 'data'
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

interface Props {
  data: Array<GlicoseData>
  count: number
}

const Chart = ({ data, count }: Props) => {
  const filtered = data.slice(Math.max(data.length - count, 1))
  return (
    <ResponsiveContainer width="95%" height={300}>
      <LineChart data={filtered}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Line type="monotone" dataKey="glicose" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
