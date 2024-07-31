import './newsletter.css';
import news1 from "../../image/newsletter/newsLeft.png"
import news2 from "../../image/newsletter/newsRight.png"
const Newsletter = () => {
    return ( 
        <div className="newsletter container">
            <div className="newsContentBox">
                <h2>Deliciousness to your inbox</h2>
                <p className="subTitle">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <form className='newsletterForm' action="">
                    <input className='newsEmail' placeholder='your email address...' type="email" name="" id="" />
                    <input className='squBtn newsBtn' type="submit" value="Subscribe" />
                </form>
            </div>
            <img src={news1} alt="newsletter background" className="left" />
            <img src={news2} alt="newsletter background" className="right" />
        </div>
    );
}
 
export default Newsletter;