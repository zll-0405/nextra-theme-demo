import nextra from 'nextra'
import { DEFAULT_LOCALE } from 'nextra/constants'

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
})
