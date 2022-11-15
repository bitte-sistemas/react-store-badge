import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import ReactStoreBadge from 'src/'

describe('ReactStoreBadge', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
    navigator = {
      get language() {
        return undefined;
      }
    };
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders ReactStoreBadge successfully', () => {
    render(<ReactStoreBadge/>, node, () => {
    })
  })

  it('renders ReactStoreBadge with props', () => {
    render(
      <ReactStoreBadge
        platform={'ios'}
        url={'https://apps.apple.com/app/'}
        locale={'en-us'}
        width={135}
        height={40}
        target={"_blank"}
      />, node, () => {
    })
  })

  it('locale branching', () => {
    render(
      <ReactStoreBadge
        locale={'zh-cn'}
      />, node, () => {
    })
    render(
      <ReactStoreBadge
        locale={'zh-tw'}
      />, node, () => {
    })
    render(
      <ReactStoreBadge
        locale={'en-us'}
      />, node, () => {
    })
  })

  it('wrong locale, wrong image', () => {
    render(
      <ReactStoreBadge
        defaultLocale={'abcd'}
        locale={'abc'}
      />, node, () => {
    })
  })
})
