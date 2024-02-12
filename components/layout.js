import Navbar from './navbar'
// import Footer from './footer'
import localFont from 'next/font/local';

const sukhumvitSet = localFont({
  src: '../public/sukhumvit-set/SukhumvitSet-Bold.ttf',
  variable: '--font-sukhumvitSet'
})
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar className={sukhumvitSet.class}/>
      <main className={sukhumvitSet.variable}>{children}</main>
      {/* <Footer /> */}
    </>
  )
}