export const getHealthStatusFromData = (
  data: any,
): GlicoseStatus | undefined => {
  const glicose = getMostRecentGlicoseValue(data)
  return getStatusFromGlicose(glicose)
}

const getMostRecentGlicoseValue = (glicoseData: any): number => {
  const lastData = [...glicoseData].pop()
  return lastData && lastData.glicose
}

interface GlicoseStatus {
  dying: string
  but: string | undefined
}

const getStatusFromGlicose = (glicose: number): GlicoseStatus | undefined => {
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
