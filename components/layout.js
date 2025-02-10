// import Navbar from './navbar'
import Footer from './footer'
import localFont from 'next/font/local';
import dynamic from 'next/dynamic'

const NavbarNoSSR = dynamic(() => import('./navbar'), { ssr: false })

const sukhumvitSet = localFont({
  src: [
    {
      path: '../public/sukhumvit-set/SukhumvitSet-Thin.ttf',
      weight: '100'
    },
    {
      path: '../public/sukhumvit-set/SukhumvitSet-Light.ttf',
      weight: '200'
    },
    {
      path: '../public/sukhumvit-set/SukhumvitSet-Medium.ttf',
      weight: '300'
    },
    {
      path: '../public/sukhumvit-set/SukhumvitSet-SemiBold.ttf',
      weight: '400'
    },
    {
      path: '../public/sukhumvit-set/SukhumvitSet-Bold.ttf',
      weight: '500'
    }
  ],
  variable: '--font-sukhumvitSet'
})

const stereogothic = localFont({
  src: '../public/stereogothic/StereoGothic-400.ttf',
  variable: '--font-stereogothic'
})

export default function Layout({ children }) {
  return (
    <div className={`${sukhumvitSet.variable} ${stereogothic.variable} background`}>
      <NavbarNoSSR />
      <main className='layout'>{children}</main>
      {/* <a target="_blank" href="http://www.adviserinfo.sec.gov/individual/summary/7833799" ><img className='finra' src="//www.finra.org/themes/custom/finra_bootstrap_sass/images/bc_badge_style_5.svg" /></a> */}
      <a href="https://brokercheck.finra.org" target="_blank"><img src='/finraBackground.png' className='finra'/></a>
      <Footer />
    </div>
  )
}