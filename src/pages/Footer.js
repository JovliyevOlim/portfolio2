import logo from '../image/ShareX_Logo.png'
import '../footer.css'
function Footer(){
    return(
        <div className={'footer d-flex align-items-center justify-content-between pz-10'}>
            <div className="container1">
                <div className="row d-flex align-items-center  justify-content-between">
                    <div className="coll-6 d-flex align-items-center justify-content-start">
                        <div className="logo1">
                            <img src={logo} alt="#"/>
                        </div>
                        <div>
                            <h1 className={'logo-text'}>santa</h1>
                        </div>

                    </div>
                    <div className="coll-6 d-flex justify-content-end">
                        <span className={'copyright'}> Copyright © 2021 programmer Jovliyev Olim.  All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer