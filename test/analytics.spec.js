import expect from 'expect'
import { equals } from 'ramda'
import createAnalyticsMiddleware from '../src/redux/middlewares/analytics'
import analyticsFilter from './filter'

describe('createAnalytics', () => {
  let rules = [
    {
      conditions: {
        type: equals('test')
      }
    },
    {
      conditions: {
        type: equals('test1')
      }
    }
  ]
  before(() => {
  })
  it('setup', () => {
    expect(analyticsFilter(rules, { type: 'test' }))
      .toEqual({
        conditions: {
          type: equals('test')
        }
      })
  })
})
