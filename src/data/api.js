import axios from 'axios'

const driveUrl =
  'https://docs.google.com/spreadsheets/d/1rgUTX_90dFgdIWYj5lfooY2q8WEZfxmD6D78DsB6sew/export?exportFormat=csv'

export const fetchGlicoseData = async () =>
  axios.get(driveUrl).then(parseGlicoseDataFromCsvResponse)

const parseGlicoseDataFromCsvResponse = ({ data }) =>
  data
    .split('\n')
    .map(point => point.split(','))
    .map(([date, glicose]) => ({ date, glicose }))
