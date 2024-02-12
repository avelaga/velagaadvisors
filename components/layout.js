import Navbar from './navbar'
// import Footer from './footer'
import localFont from 'next/font/local';

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
 
export default function Layout({ children }) {
  return (
    <div className={sukhumvitSet.variable}>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}