import type { DocsThemeConfig } from 'nextra-theme-docs'
// import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { SiBuymeacoffee } from "react-icons/si"
import { BsBook } from "react-icons/bs"

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Nextra theme demo
      </span>
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nextra-theme demo'
      }
    }
  },
  project: {
    icon: SiBuymeacoffee,
    link: 'https://ko-fi.com/lulubiu',
  },
  // chat: {
  //   icon: BsBook,
  //   link: 'https://#',
  // },
  // docsRepositoryBase: 'https://github.com',
  darkMode: true,
  primaryHue: 210,
  head: function useHead() {
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="zh-CN" />
        <meta
          name="description"
          content="this is a nextra theme demo"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </>
    )
  },
  editLink: { component: null },
  feedback: { content: null },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24"> 
        <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
            <div className="max-[767px]: w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial">
              <h2 className="text-3xl font-bold md:text-5xl">
                Nextra theme demo 
              </h2>
            </div>
            <div className="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8">
              <div className="mb-4 flex max-w-[272px] items-start justify-start">
                <SiBuymeacoffee className="mr-3 inline-block"/>
                <a href="https://ko-fi.com/lulubiu" target="_blank" className="text-[#636262] max-[479px]:text-sm">buy me a coffee</a>
              </div>

              {/* <div className="mb-4 flex max-w-[272px] items-start justify-start">
                <BsBook className="mr-3 inline-block"/>
                <a href="#" target="_blank" className="text-[#636262] max-[479px]:text-sm">take a look</a>
              </div> */}
            </div>
        </div>

        <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]">
        </div>

        <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
          <div className="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
            <a href="#" className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12">Guide</a>
            <a href="#" className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12">Test</a>
            <a href="#" className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12">About</a>
          </div>

          <div className="max-[991px]:flex-none">
            <p className="text-[#636262] max-[479px]:text-sm"> © Copyright 2024. All rights reserved. </p>
          </div>
        </div>
      </div>
    )
  },
}

export default config
