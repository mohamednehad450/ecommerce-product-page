import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Product, ProvideCart } from '../components/context'
import { CartButton, CartOverlay, ProductDisplay } from '../components/main'
import { Navbar, NavLink, Avatar } from '../components/nav'



const product: Product = {
  id: 1,
  brand: "SNEAKER COMPANY",
  name: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  images: [
    {
      thumbnail: "/images/image-product-1-thumbnail.jpg",
      image: "/images/image-product-1.jpg",
    },
    {
      thumbnail: "/images/image-product-2-thumbnail.jpg",
      image: "/images/image-product-2.jpg",
    },
    {
      thumbnail: "/images/image-product-3-thumbnail.jpg",
      image: "/images/image-product-3.jpg",
    },
    {
      thumbnail: "/images/image-product-4-thumbnail.jpg",
      image: "/images/image-product-4.jpg",
    }
  ],
  price: 250,
  discount: 0.5
}



const Home: NextPage = () => {

  const [openCart, setOpenCart] = useState(false)

  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <link href='https://fonts.googleapis.com/css?family=Kumbh Sans' rel='stylesheet' />
      </Head>
      <ProvideCart>
        <main className='w-screen max-w-screen-xl flex flex-col items-stretch m-auto'>
          <Navbar
            logo={<Image src="/images/logo.svg" alt="Logo" width={138} height={20} />}
            actions={(
              <>
                <CartButton onClick={() => setOpenCart(v => !v)} />
                <span
                  className={`
                    ${openCart ? 'block' : 'hidden'}
                    absolute right-4 md:left-auto left-4 translate-y-14
                    2xl:translate-x-[-50%]  2xl:right-auto
                    shadow-xl rounded-md z-10 m-2 bg-white
                  `}
                >
                  <CartOverlay onClose={() => setOpenCart(() => false)} />
                </span>
                <Avatar src='/images/image-avatar.png' />
              </>
            )}
          >
            <NavLink title="Collections" href="#" />
            <NavLink title="Men" href="#" />
            <NavLink title="Women" href="#" />
            <NavLink title="About" href="#" />
            <NavLink title="Contact" href="#" />
          </Navbar>
          <section className='mt-6 flex'>
            <ProductDisplay product={product} />
          </section>
        </main>
      </ProvideCart>
      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/mohamednehad450/" target={"_blank"}>Mohamed Nehad</a>.
        </div>
      </footer>
    </>
  )
}

export default Home
