import axios from 'axios'
import { GlicoseResponse, GlicoseData } from 'data'

const driveUrl =
  'https://docs.google.com/spreadsheets/d/1rgUTX_90dFgdIWYj5lfooY2q8WEZfxmD6D78DsB6sew/export?exportFormat=csv'

export const fetchGlicoseData = async (): Promise<Array<GlicoseData>> =>
  axios.get(driveUrl).then(parseGlicoseDataFromCsvResponse)

const parseGlicoseDataFromCsvResponse = ({
  data,
}: GlicoseResponse): Array<GlicoseData> =>
  data
    .split('\n')
    .map(point => point.split(','))
    .map(([date, glicose]) => ({ date, glicose: parseInt(glicose) }))
