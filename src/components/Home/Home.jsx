import React, { useState, useEffect } from 'react'
import homeIllustration from '../../assets/home-illustration.svg'
import { Link } from 'react-router-dom'

function Home({ isLoading }) {
  const [waitingTime, setWaitingTime] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setWaitingTime(true)
      }, 1800);
    }
  }, [])

  return (
    <>
      <section className='home-hero-section pt-32 pb-20'>
        <div className='container flex flex-wrap md:flex-nowrap justify-between items-center mx-auto my-10 px-4'>
          <div>
            <h1 className='text-[40px] font-josefin-slab font-black'>Hi There! <br /> I'm <span className='text-secondary relative sm:whitespace-normal whitespace-nowrap'><svg aria-hidden="true" id="name-underline" viewBox="0 0 297 33" className={`absolute left-0 top-2/3 h-[0.58em] w-full fill-transparent sm:opacity-0  ${waitingTime ? "block" : "hidden"} stroke-[#9ceaff9d] stroke-[3.5]`} preserveAspectRatio="none"><path d="M0.999989 20.5C79.5 4.5 85.5 5.5 85.5 5.5C354.5 -9.50001 -56.5262 35.0001 216.5 22.8813C235.5 22.0379 266.931 23.7779 296.5 31" /></svg> <span>Anuj Chaudhary</span></span> </h1>
            <h2 className='text-4xl font-semibold font-josefin-slab mt-3'><span className='font-body'>~</span> Passionate Web Developer</h2>
            <p className='mt-5 text-lg mb-10'>Passionate about creating elegant and user-friendly web experiences.</p>
            <p className='hover:text-secondary fill-white w-max hover:fill-secondary transition-all duration-300'>
            <Link to={'/about'} className='learn-more-link flex items-center relative font-medium text-lg'><span>Read More About me</span> <svg xmlns="http://www.w3.org/2000/svg" className='h-5 fill-inherit ms-3' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></Link>
            </p>
          </div>
          <div>
            <img src={homeIllustration} className='h-[400px]' alt="homepage-illustration" />
          </div>
        </div>
      </section>
      <section className='container px-4 mx-auto'>
        <p>Hey, Whats Up? Ready to know who I am? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse fugiat voluptatibus aliquid nisi? Nesciunt voluptatum, non doloribus laudantium, expedita iusto tempore molestias explicabo fugit eos eaque beatae dolorem, reiciendis recusandae. Voluptatum, quasi doloremque. Nobis alias, quo quaerat ducimus in vitae. Quas sunt inventore ipsam error vitae doloremque hic minima voluptatem iure, culpa expedita nobis quod laborum quia? Placeat dolor, corporis impedit vitae laboriosam iusto suscipit atque porro rem quibusdam saepe vero labore eius quasi aspernatur deleniti officiis ipsa veritatis inventore dolorum doloremque, sint ipsum facilis. Deserunt maxime doloremque vitae at distinctio ipsa beatae consequatur suscipit quasi quae omnis, esse recusandae iure perferendis, rerum reiciendis ratione perspiciatis unde nemo delectus eos quisquam sit odio reprehenderit. Hic doloremque reiciendis iusto eligendi laborum voluptatem optio maiores expedita exercitationem delectus. Debitis, voluptate. Architecto, voluptas reiciendis sint autem perspiciatis corrupti rem maiores aut quia ex recusandae placeat amet facilis odio delectus vel eligendi eos ducimus nihil molestias illum a tempore accusantium consequatur. Alias officiis omnis sed expedita, pariatur nobis doloremque eaque atque consequatur ipsum, voluptatem cupiditate porro reiciendis quibusdam veritatis cum, quaerat illo obcaecati! Aliquam aspernatur laboriosam provident? Modi iste qui molestias voluptatem cum praesentium voluptate impedit provident minima aperiam quo quod rerum veritatis non rem pariatur ab, illo velit error sapiente facilis omnis minus. Sed vero perferendis deleniti excepturi? Eum velit, quasi quo suscipit id quisquam cum distinctio est magnam ipsam ad reiciendis alias laudantium officia harum excepturi ex. Minus architecto pariatur dolore magnam rerum consequuntur itaque nihil eius dolorem quod voluptatum debitis molestias ipsum, odit sed doloremque iure et. Aliquid, cupiditate a. Repellendus laborum ea quasi animi aut eaque minus consequuntur illum, veniam, voluptatem ut quo. Illo quasi optio consequuntur a explicabo beatae possimus excepturi nostrum nobis ducimus commodi earum eligendi dolor dicta qui eveniet distinctio sint ipsam iste iusto voluptate praesentium, aliquam reprehenderit? Velit a iste dolore eveniet facilis illum tempore modi voluptates voluptate, tempora soluta aliquid perferendis fugiat voluptatem aliquam impedit et ipsam corrupti eligendi nostrum! Eligendi fuga impedit officiis ad, molestiae eaque omnis vitae doloremque quos consectetur necessitatibus molestias numquam. Dicta commodi consequuntur ipsum vero pariatur ab nisi accusamus vel voluptatibus laboriosam accusantium reiciendis fugit nemo voluptatum at, vitae optio, veniam, quisquam quae! Impedit quam iste dolor iure molestias fugiat, commodi culpa! Quasi earum natus dolorem ea corrupti placeat doloribus assumenda, vitae quam nemo ut sunt accusamus, iure temporibus voluptatibus totam corporis dolorum necessitatibus sapiente consequuntur soluta deleniti inventore! Autem labore architecto eveniet nostrum. Voluptatem ipsa expedita sint, illo error, voluptates officiis ullam cum beatae illum non. Tempora cum iusto odit sequi vel laborum omnis quod sunt ipsa porro reiciendis, deleniti recusandae fugit accusamus esse consequuntur et beatae distinctio. Molestiae dolor reprehenderit odit fugit fugiat, earum ipsum aliquam, sequi error at corrupti nobis, tempore assumenda eligendi a optio mollitia aliquid maiores illum. Quis odit placeat ipsam, repudiandae blanditiis velit corporis repellendus consequatur vel sapiente, quaerat iusto laborum officiis illum minus quas id tenetur non laboriosam asperiores assumenda! Accusantium obcaecati fugit ducimus doloremque. Corporis recusandae rem nostrum molestias corrupti earum.</p>
      </section>
    </>
  )
}

export default Home
