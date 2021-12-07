import '../Contact.css'
import contact from '../image/origin.jpg'
function Contact(){
    return(
        <div className={'contact component-space'} id={'contact'}>
            <div className="container1">
                <div className="row">
                    <div className="coll-6">
                        <div className="contact-box">
                            <div className="contact-meta">
                                <h1 className="hire-text">
                                    Hire Me.
                                </h1>
                                <p className="hire-text white">I am available for freelance work. Connect with me via phone:</p>
                                <p className="hire-text white"><strong>+99890 124 86 64</strong>  or email  <strong>olimjovliyev@gmail.com</strong></p>
                            </div>
                            <div className="input-box">
                                <input type="text" className="contact name" placeholder={'Your name *'}/>
                                <input type="text" className="contact email" placeholder={'Your email *'}/>
                                <input type="text" className="contact subject" placeholder={'Write a Subject'}/>
                                <textarea name="message" id="message" placeholder='Write Your message'></textarea>
                                <button className={'btn contact  pointer'} type='submit'>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="coll-6">
                        <img src={contact} alt="####" className={'contact-img'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact