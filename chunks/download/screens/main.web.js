import React from 'react'
import { Screen } from 'react-dom-chunky'

import Download from '../components/Download'

export default class DownloadScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  components() {
    return super.components().concat(<Download />)
  }
}
