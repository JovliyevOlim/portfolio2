import '../blog.css'
import news1 from "../image/blog-01.jpg";
import news2 from "../image/blog-02.jpg";
import news3 from "../image/blog-03.jpg";
function Blog(){
    return(
        <div>
            <div className="blog component-space" id={'blog'}>
                <div className="heading">
                    <h1 className="heading">
                        Latest News
                    </h1>
                    <p className={'heading p-color'}>Lorem ipsum dolor amet, consectetur adipisicing elit exercitationem </p>
                    <p className={'heading p-color'}>inventore ipsam placeat sunt tenetur unde!</p>
                </div>
                    <div className="container1">
                        <div className="row">

                            <div className="coll-4">
                                <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={news1} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                                    <div className="Blog-meta position-absolute ">
                                        <h5 className="portfolio-text">Development</h5>
                                        <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                        <a href="" className={'blog portfolio-btn btn '}>View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="coll-4">
                                <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={news2} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                                    <div className="Blog-meta position-absolute ">
                                        <h5 className="portfolio-text">Development</h5>
                                        <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                        <a href="" className={'blog portfolio-btn btn '}>View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="coll-4">
                                <div className="portfolio-box pointer relative">
                                    <div className="portfolio-box-img pointer relative">
                                        <div className="portfolio-img-box">
                                            <img src={news3} alt="" className="portfolio-img"/>
                                        </div>
                                        <div className="mask-effect"></div>
                                    </div>
                                    <div className="Blog-meta position-absolute ">
                                        <h5 className="portfolio-text">Development</h5>
                                        <h4 className="portfolio-text">Getting tickets to the big show</h4>
                                        <a href="" className={'blog portfolio-btn btn '}>View Details</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Blog