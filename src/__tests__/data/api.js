import mockAxios from 'axios'
import { fetchGlicoseData } from 'data/api'

describe('fetchGlicoseData', () => {
  it('parses response csv into a list of objects', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: '2019-03-12 07:58,250\n2019-03-13 07:46,290',
      }),
    )

    const glicoseData = await fetchGlicoseData()
    const expectedObject = [
      { date: '2019-03-12 07:58', glicose: '250' },
      { date: '2019-03-13 07:46', glicose: '290' },
    ]

    expect(glicoseData).toMatchObject(expectedObject)
  })
})
