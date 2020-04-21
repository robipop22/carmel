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

const DownloadSection = () => {
  const [os, setOs] = useState(getOs())
  return (
    <div
      style={{
        backgroundSize: 'cover',
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
          color: '#262626',
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
            <span
              onClick={() => setOs('windows')}
              className={os === 'windows' ? 'selected' : ''}
            >
              Windows{' '}
              <WindowsIcon fill={os === 'windows' ? '#028596' : '#253136'} />{' '}
            </span>
            <span
              onClick={() => setOs('mac')}
              className={os === 'mac' ? 'selected' : ''}
            >
              Mac <MacIcon fill={os === 'mac' ? '#028596' : '#253136'} />
            </span>
            <span
              onClick={() => setOs('linux')}
              className={os === 'linux' ? 'selected' : ''}
            >
              Linux <LinuxIcon fill={os === 'linux' ? '#028596' : '#253136'} />
            </span>
            <style jsx>
              {`
                .selected {
                  color: #028596;
                }
                span {
                  cursor: pointer;
                  font-size: 1.5rem;
                  margin: 1rem;
                }
                span:hover {
                  color: #02bdd5;
                }
              `}
            </style>
          </>
        ) : (
          <span>
            You need to download the studio from a Laptop running Mac, Windows
            or Linux
            <style jsx>
              {`
                span {
                  cursor: default;
                  font-size: 1.5rem;
                  margin: 1rem;
                  color: #4e4e4e;
                }
              `}
            </style>
          </span>
        )}
      </div>
      {os && (
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
      )}
    </div>
  )
}

export default DownloadSection
