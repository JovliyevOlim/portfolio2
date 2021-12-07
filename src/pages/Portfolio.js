import '../portfolio.css'
import portfolia1 from '../image/portfolio-1.jpg'
import portfolia2 from '../image/portfolio-2.jpg'
import portfolia3 from '../image/portfolio-3.jpg'
import portfolia4 from '../image/portfolio-4.jpg'
function Portfolio(){
    return(
        <div className={'portfolio component-space'} id={'portfolio'}>
            <div className="heading">
                <h1 className="heading">
                    My Latest Project
                </h1>
                <p className={'heading p-color'}>Lorem ipsum dolor amet, consectetur adipisicing elit exercitationem </p>
                <p className={'heading p-color'}>inventore ipsam placeat sunt tenetur unde!</p>
            </div>
            <div className="container1">
                <div className="row port">
                    <div className="coll-4">
                        <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={portfolia1} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                            <div className="portfolio-meta position-absolute ">
                                <h5 className="portfolio-text">Development</h5>
                                <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                <a href="" className={'portfolio-btn'}>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="coll-4">
                        <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={portfolia2} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                            <div className="portfolio-meta position-absolute ">
                                <h5 className="portfolio-text">Development</h5>
                                <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                <a href="" className={'portfolio-btn'}>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="coll-4">
                        <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={portfolia3} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                            <div className="portfolio-meta position-absolute ">
                                <h5 className="portfolio-text">Development</h5>
                                <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                <a href="" className={'portfolio-btn'}>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="coll-4">
                        <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={portfolia4} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                            <div className="portfolio-meta position-absolute ">
                                <h5 className="portfolio-text">Development</h5>
                                <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                <a href="" className={'portfolio-btn'}>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="coll-4">
                        <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={portfolia3} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                            <div className="portfolio-meta position-absolute ">
                                <h5 className="portfolio-text">Development</h5>
                                <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                <a href="" className={'portfolio-btn'}>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="coll-4">
                        <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={portfolia2} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                            <div className="portfolio-meta position-absolute ">
                                <h5 className="portfolio-text">Development</h5>
                                <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                <a href="" className={'portfolio-btn'}>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="view-more-btn d-flex align-items-center justify-content-center pxy-30">
                        <button className={'view-more pointer'}>View more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio