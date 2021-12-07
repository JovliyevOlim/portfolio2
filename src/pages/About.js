import '../About.css'
import about from '../image/about.jpg'
function About(){

    window.addEventListener('scroll', function (){
        const upToTop = document.querySelector('a.bottom-to-top');
        upToTop.classList.toggle('active',window.scrollY > 0)
    })

    return(
        <div className={'about component-space'} id={'about'}>
           <div className="container1">
               <div className="row">
                   <div className="coll-6">
                       <img src={about} alt="####" className={'about-img'}/>
                   </div>
                   <div className="coll-6">
                       <h1 className="about-heading">
                           About Me
                       </h1>
                       <div className={'about-meta'}>
                           <p className="about-text p-color">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi at
                               beatae consectetur deleniti ducimus earum enim est, eum excepturi facere illum
                               incidunt iusto modi molestias natus nostrum optio perferendis porro repellat
                               repudiandae saepe tempore temporibus tenetur
                           </p>
                           <p className="about-text p-color">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi at
                               beatae consectetur deleniti ducimus earum enim est, eum excepturi facere illum
                               incidunt iusto modi molestias natus nostrum optio perferendis porro repellat
                               repudiandae saepe tempore temporibus tenetur
                           </p>
                           <p className="about-text p-color">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi at
                               beatae consectetur deleniti ducimus earum enim est, eum excepturi facere
                           </p>
                           <div className={'about-button d-flex align-items-center'}>
                               <a href="#"><button className="about-btn">Download Cv</button></a>
                               <a href="#"><button className="about-btn">Hire Me</button></a>

                           </div>
                       </div>
                   </div>
               </div>
           </div>
            <div className="up-to-top-btn">
                <a href="#" className={'bottom-to-top'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up white"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                </svg>
            </a>
            </div>
        </div>
    )
}
export default About