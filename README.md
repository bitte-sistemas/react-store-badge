# react-store-badge

react-store-badge is a React.js component displaying badges for App Store and Google Play Store. react-store-badge serves locale (localization) setting for each country.

react-store-badge uses SVG files (optimized by svgo), so no worries about image going wrong.

## Getting started

```
  npm install --save @bitte-sistemas/react-store-badge
```

## Usage

```
  import React, {Component} from 'react'

  import ReactStoreBadge from 'react-store-badge'

  class App extends Component {
    render() {
      return <div>
        <ReactStoreBadge
          platform={'ios'}
          url={'YOUR_APP_STORE_URL'}
          locale={'en-us'}
        />

        <ReactStoreBadge
          platform={'android'}
          url={'YOUR_PLAY_STORE_URL'}
          locale={'ko-kr'}
        />
      </div>
    }
  }
```

## props

| Name         |               Type                |  Default   | Description                     |
| :----------- | :-------------------------------: | :--------: | :------------------------------ |
| **url**      |        <code>string</code>        | `required` | url of App Store and Play Store |
| **platform** | <code>'ios'&#124;'android'</code> | `required` | url of App Store and Play Store |
| **defaultLocale** | <code>string</code> | 'en-us' | default locale code |
| **locale** | <code>string</code> | 'en-us' | locale name |
| **width** | <code>number</code> | 135 | width for badge size |
| **height** | <code>number</code> | 40 | height for badge size |
| **target** | <code>'_self'&#124;'_blank'&#124;'_parent'&#124;'_top'</code> | '_blank' | target for url to be opened |
## Localization

### Supported locales

[Apple locales list](https://www.apple.com/itunes/marketing-on-itunes/identity-guidelines.html#itunes-store-badges#LocalizedBadges)

[Google locales list](https://github.com/yjb94/google-play-badge-svg/tree/master/img)

### Localization tip

iOS uses full code of their locale. (ex. en-us) and google uses short code of their locale(ex. en). So if you want your badge in only one store, you can customize it anyway.

## Badge guidelines

Please note that you have to follow the guidelines below.

[Apple Badge Guidelines](https://developer.apple.com/app-store/marketing/guidelines/)

[Google Badge Guidelines](https://play.google.com/intl/en_us/badges/)
