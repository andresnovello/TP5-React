import './Footer.css';
const Footer = () => {

    return (
        <>
            <div className="footer-Container">
                <div className="ourCompany-container">
                    <h4 className='ourCompany-title'>Our Company</h4>
                    <p className="ourCompany-paragraph">Information about the company.</p>
                </div>

                <div className='contactUs-container'>
                    <h4 className='contactUs-title'>Contact Us</h4>

                    <ul className='contactUs-list-container'>
                        <li>
                            ejemplo@gmail.com
                        </li>

                        <li>
                            (261) 581-0446
                        </li>
                    </ul>
                </div>

            </div>
        </>

    )
}
export default Footer;
