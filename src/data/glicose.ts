import { GlicoseStatus, GlicoseData } from 'data'

export const getHealthStatusFromData = (
  data: Array<GlicoseData>,
): GlicoseStatus | undefined => {
  const glicose = getMostRecentGlicoseValue(data)
  return getStatusFromGlicose(glicose)
}

const getMostRecentGlicoseValue = (
  glicoseData: Array<GlicoseData>,
): number | undefined => {
  const lastData = [...glicoseData].pop()
  return lastData && lastData.glicose
}

const getStatusFromGlicose = (
  glicose: number | undefined,
): GlicoseStatus | undefined => {
  if (glicose === undefined) return undefined
  switch (true) {
    case glicose < 60:
      return { dying: 'SIM', but: undefined }
    case glicose >= 60 && glicose <= 120:
      return { dying: 'NÃO', but: undefined }
    case glicose > 120:
      return { dying: 'NÃO', but: 'mas ta se fudendo' }
    default:
      return undefined
  }
}
