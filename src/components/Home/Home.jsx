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
            <h1 className='text-[40px] font-josefin-slab font-black'>Hi There! <br /> I'm <span className='text-secondary relative whitespace-nowrap'><svg aria-hidden="true" id="name-underline" viewBox="0 0 297 33" className={`absolute left-0 top-2/3 h-[0.58em] w-full fill-transparent ${waitingTime ? "block" : "hidden"} stroke-[#9ceaff9d] stroke-[3.5]`} preserveAspectRatio="none"><path d="M0.999989 20.5C79.5 4.5 85.5 5.5 85.5 5.5C354.5 -9.50001 -56.5262 35.0001 216.5 22.8813C235.5 22.0379 266.931 23.7779 296.5 31" /></svg> <span>Anuj Chaudhary</span></span> </h1>
            <h2 className='text-4xl font-semibold font-josefin-slab mt-3'><span className='font-body'>~</span> Passionate Web Developer</h2>
            <p className='mt-5 text-lg mb-10'>Passionate about creating elegant and user-friendly web experiences.</p>
            <p className='hover:text-secondary fill-white w-max hover:fill-secondary transition-all duration-300'>
            <Link to={'/about'} className='learn-more-link flex items-center relative  text-lg'><span>Learn More About me</span> <svg xmlns="http://www.w3.org/2000/svg" className='h-4 fill-inherit ms-2' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></Link>
            </p>
          </div>
          <div>
            <img src={homeIllustration} className='h-[400px]' alt="homepage-illustration" />
          </div>
        </div>
      </section>
      <section className='container px-4 mx-auto'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure saepe nam repudiandae explicabo magnam architecto laborum nemo sed perspiciatis molestiae quae, labore sit nobis ipsa necessitatibus corporis officiis recusandae atque minus animi at voluptate tenetur laudantium voluptatibus. Enim nulla, quisquam quo alias ducimus officiis accusantium mollitia beatae eveniet culpa voluptates voluptate quam non saepe. Qui repellendus adipisci impedit unde beatae ad distinctio exercitationem provident a, totam autem, nisi nihil rem eos earum dolorem cupiditate nesciunt minus incidunt consectetur, ex culpa quia esse. Voluptates eaque fugit doloremque laboriosam nihil voluptatem autem harum totam. Quasi, illum. Accusamus ad obcaecati eum in nesciunt quasi, beatae repellat dolor illo ipsam odit, fugiat rerum veritatis sapiente culpa qui eaque maiores atque debitis laborum ex! Quasi provident molestias illum non consectetur pariatur dignissimos tempore sint repudiandae saepe maxime vel assumenda sed et, nesciunt dicta incidunt similique sapiente culpa cupiditate delectus iste aspernatur praesentium asperiores. Temporibus ratione quos facere laudantium, quis repellat ipsa dolorem a rerum minus dolor quibusdam! Alias optio in a asperiores saepe pariatur, tempore sit animi fuga, iusto cumque impedit similique. Consectetur minima ipsum esse suscipit blanditiis sed, vel mollitia ea inventore laudantium facilis. Nostrum sed aliquid id! Porro nemo esse est magni mollitia corporis voluptatem fugiat voluptas assumenda minus repellat itaque magnam, ipsa ut accusantium vitae deserunt molestiae quia eveniet similique adipisci nesciunt reiciendis quas consequatur! Beatae repudiandae accusantium voluptatum id iure. Officia inventore architecto perspiciatis totam reprehenderit reiciendis commodi maxime illo hic laboriosam minus aspernatur enim molestiae modi saepe porro repellendus possimus ad mollitia, quae cumque laudantium quod consequatur ullam! Corrupti rem eligendi, illo dolorem velit ipsa cum. Fugiat, quibusdam saepe, repudiandae reiciendis harum, commodi praesentium corporis ullam odit dolorem quas culpa iste tenetur. Sint accusamus eligendi aspernatur quisquam consequuntur suscipit maxime maiores. Expedita provident, voluptates deleniti optio, id similique rerum eius perferendis, incidunt ab aliquam architecto atque? Doloremque beatae nihil mollitia magnam laborum at eius quo recusandae aspernatur adipisci, soluta ex similique culpa, officia doloribus. Consectetur natus blanditiis sint voluptatem adipisci doloremque ut porro, sapiente aut quos et, odio nemo accusantium est facere, eum quod! Id officiis quam nemo tempora, accusamus eius labore totam. Repellat totam saepe doloremque sunt soluta, quod obcaecati architecto, non debitis cum officiis quibusdam eaque aspernatur quas velit cumque? Eligendi eius adipisci dolores eos voluptatem reprehenderit architecto, soluta animi! Eum, sequi sed. Totam voluptatem quasi magni hic commodi culpa ad, numquam maxime repudiandae cum tempora eaque quaerat magnam officia similique aliquid reiciendis ducimus ipsa ullam doloremque quae perferendis quod harum! Nemo dicta itaque voluptas corrupti, deleniti exercitationem molestias aperiam velit ipsa harum dolorum consequuntur vel voluptatem delectus dolor error quis aliquam beatae placeat. Labore, sapiente. Reiciendis quaerat doloribus, corporis cum assumenda vitae aspernatur vel amet. Sequi molestias ratione laborum eaque? Accusantium ab ratione nihil, illo debitis, architecto esse similique vel repellendus assumenda doloremque laboriosam voluptatibus a optio numquam exercitationem voluptates et minus eius cupiditate iure provident aliquam? Consequatur facere optio iure ipsam beatae, quia et atque voluptates itaque aliquam voluptatem rerum omnis voluptatum laudantium eos qui eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis ut modi dicta magni ipsum quaerat iusto explicabo. Voluptatum, quia. Illo quidem cum error perferendis sed repellat optio tenetur eum libero beatae explicabo assumenda nihil odit velit tempora consequuntur, quae officiis doloribus distinctio consequatur voluptatum dolores laborum. Ad magnam veritatis error modi minima laboriosam, minus, recusandae exercitationem fuga hic neque illo perferendis unde, cumque at voluptas ab repellendus iure quisquam cupiditate provident inventore. Alias quo accusantium, inventore ex amet enim sapiente molestias, voluptatem maiores quidem voluptas, eos nobis odio nihil labore commodi quibusdam atque illo non natus a beatae hic!</p>
      </section>
    </>
  )
}

export default Home
