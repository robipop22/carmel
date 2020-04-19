import React, { useState } from 'react'
import { Typography } from '@rmwc/typography'
import { Button } from '@rmwc/button'

import MacIcon from './MacIcon'
import WindowsIcon from './WindowsIcon'
import LinuxIcon from './LinuxIcon'

const getOs = () => {
  const platform = window.navigator.platform,
    macOsPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'darwin'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']

  let os = null

  if (macOsPlatforms.indexOf(platform) !== -1) {
    os = 'mac'
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows'
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux'
  } else {
    os = false
  }

  return os
}

const spanCommonStyle = (selected) => ({
  cursor: 'pointer',
  fontSize: '1.5rem',
  margin: '1rem',
  color: `${selected ? '#028596' : 'inherit'}`,
})

const DownloadSection = () => {
  const [os, setOs] = useState(getOs())
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(../../../assets/download-2nd-section.r.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: '5rem',
      }}
    >
      <Typography
        use="headline2"
        style={{
          color: '#E36402',
          zIndex: 2,
          fontWeight: 'bold',
        }}
      >
        Download The Studio to start your Journey
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '20%',
        }}
      >
        {os ? (
          <>
            <span style={spanCommonStyle(os === 'windows')}>
              Windows <WindowsIcon />{' '}
            </span>
            <span style={spanCommonStyle(os === 'mac')}>
              Mac <MacIcon />
            </span>
            <span style={spanCommonStyle(os === 'linux')}>
              Linux <LinuxIcon />
            </span>
          </>
        ) : (
          <span>
            You need to download the studio from a Laptop running Mac, Windows
            or Linux
          </span>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2rem',
        }}
      >
        <Button
          onClick={() => {}}
          raised
          style={{
            backgroundColor: '#E36402',
            borderRadius: '7px',
          }}
        >
          Download
        </Button>
      </div>
    </div>
  )
}

export default DownloadSection
