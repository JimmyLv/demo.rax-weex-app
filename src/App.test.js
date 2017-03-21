import { createElement } from 'rax'
import renderer from 'rax-test-renderer'
import App from './App'

global.fetch = jest.fn(() => new Promise(resolve => resolve()))

jest.mock('universal-env', () => ({
  isWeex: true,
}))

describe('App', () => {
  it('should render a View', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree.tagName).toEqual('DIV')
    expect(tree.children[0].children[0].tagName).toEqual('TEXT')
  })
})
