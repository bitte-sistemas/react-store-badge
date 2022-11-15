import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactStoreBadge from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      locale:'en-us'
    };
  }

  changeLocale = () => {
    const { locale } = this.state;
    this.setState({ locale:locale === 'en-us' ? 'ko-kr' : 'en-us' })
  }

  render() {
    const { locale } = this.state;

    return (
      <div 
        style={{
          fontFamily:'Arial',
          textAlign:'center',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}
      >
        <div
          style={{
            marginBottom:'60px'
          }}
        >
          <h1>React Store Badges</h1>
          <div
            style={{
              width:'600px',
              display:'flex',
              justifyContent:'space-between'
            }}
          >
            <ReactStoreBadge
              platform={'ios'}
              url={'https://apps.apple.com/app/'}
            />
            <ReactStoreBadge
              platform={'android'}
              url={'https://play.google.com/store/apps/details?id='}
              locale={'ko-kr'}
            />
            <ReactStoreBadge
              platform={'ios'}
              url={'https://apps.apple.com/app/'}
              locale={'es-ES'}
            />

            <ReactStoreBadge
              platform={'android'}
              url={'https://play.google.com/store/apps/details?id='}
              locale={'zh-CN'}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom:'60px'
          }}
        >
          <h1>Locale Change</h1>
          <div>
            <ReactStoreBadge
              platform={'ios'}
              url={'https://apps.apple.com/app/'}
              locale={locale}
            />
          </div>
          <button
            onClick={this.changeLocale}
          >
            change language
          </button>
        </div>
        <div>
          <h1>Dynamic width(heights auto generated)</h1>
          <div>
            <ReactStoreBadge
              platform={'ios'}
              width={200}
            />
            <ReactStoreBadge
              platform={'android'}
              width={250}
            />
            <ReactStoreBadge
              platform={'ios'}
              width={300}
            />
            <ReactStoreBadge
              platform={'android'}
              width={500}
            />
          </div>
        </div>
        <div>
          <h1>Open in new target</h1>
          <div>
            <ReactStoreBadge
              platform={'ios'}
              url={'https://apps.apple.com/app/'}
              target="_blank"
            />
          </div>
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
