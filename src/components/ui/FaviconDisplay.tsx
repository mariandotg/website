import React from 'react'

interface Props {
  url: string
}

const FaviconDisplay: React.FunctionComponent<Props> = ({ url }) => {
  const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=20`

  return <img src={faviconUrl} className="size-5" />
}

export default FaviconDisplay
