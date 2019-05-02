import { getHealthStatusFromData } from 'data/glicose'

describe('getHealthStatusFromData', () => {
  describe('when glicoseData is a list of points', () => {
    describe('when last glicose is under 60', () => {
      it('should return SIM to dying', () => {
        const glicoseData = [
          { date: '2019-03-12 07:58', glicose: 250 },
          { date: '2019-03-12 07:58', glicose: 59 },
        ]
        const expected = { dying: 'SIM' }
        expect(getHealthStatusFromData(glicoseData)).toMatchObject(expected)
      })
    })
    describe('when last glicose is between 60 and 120', () => {
      it('should return NÃO to dying', () => {
        const glicoseData = [
          { date: '2019-03-12 07:58', glicose: 250 },
          { date: '2019-03-12 07:58', glicose: 60 },
        ]
        const expected = { dying: 'NÃO' }
        expect(getHealthStatusFromData(glicoseData)).toMatchObject(expected)
      })
    })
    describe('when last glicose is over 120', () => {
      it('should return NÃO to dying and `mas ta se fudendo` to but', () => {
        const glicoseData = [
          { date: '2019-03-12 07:58', glicose: 250 },
          { date: '2019-03-12 07:58', glicose: 121 },
        ]
        const expected = { dying: 'NÃO', but: 'mas ta se fudendo' }
        expect(getHealthStatusFromData(glicoseData)).toMatchObject(expected)
      })
    })
    describe('when last glicose is something else', () => {
      it('should return undefined', () => {
        const glicoseData = [
          { date: '2019-03-12 07:58', glicose: 250 },
          { date: '2019-03-12 07:58', glicose: NaN },
        ]

        expect(getHealthStatusFromData(glicoseData)).toBeUndefined()
      })
    })
  })
  describe('when glicoseData is empty', () => {
    it('should return undefined', () => {
      expect(getHealthStatusFromData([])).toBeUndefined()
    })
  })
})
