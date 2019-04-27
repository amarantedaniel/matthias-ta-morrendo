export const getHealthStatusFromData = data => {
  const glicose = getMostRecentGlicoseValue(data)
  return getStatusFromGlicose(glicose)
}

const getMostRecentGlicoseValue = glicoseData => {
  const lastData = [...glicoseData].pop()
  return lastData && lastData.glicose
}

const getStatusFromGlicose = glicose => {
  switch (true) {
    case glicose < 60:
      return { dying: 'SIM' }
    case glicose >= 60 && glicose <= 120:
      return { dying: 'NÃO' }
    case glicose > 120:
      return { dying: 'NÃO', but: 'mas ta se fudendo' }
    default:
      return undefined
  }
}
