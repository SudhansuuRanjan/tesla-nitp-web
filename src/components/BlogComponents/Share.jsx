import "./Share.scss";
import { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

const Share = ({ topic, para }) => {
    const [sharePopup, setSharePopup] = useState(false);

    return (
        <div className="share-news clicked">
            <button className="share-btn text-white bg-black" onClick={() => setSharePopup(!sharePopup)}>
                <BsFillShareFill />
            </button>

            {sharePopup && (
                <div className="share-popup">
                    <button
                        onClick={() => {
                            setSharePopup(false);
                            navigator.clipboard.writeText(window.location.href);
                        }}
                        className="popup-btn"
                    >
                        <div>
                            <AiOutlineLink />
                        </div>
                        <p>Copy Link</p>
                    </button>
                    <div className="br"></div>

                    <a href={`http://twitter.com/share?text=${topic}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                        <button onClick={() => setSharePopup(false)} className="popup-btn">
                            <div>
                                <FaTwitter />
                            </div>
                            <p>Twitter</p>
                        </button>
                    </a>

                    <a href={`https://api.whatsapp.com/send?text=*${topic}* ${para} ${window.location.href}`} target="_blank" rel="noopener noreferrer">
                        <button onClick={() => setSharePopup(false)} className="popup-btn">
                            <div>
                                <RiWhatsappFill />
                            </div>
                            <p>WhatsApp</p>
                        </button>
                    </a>

                    <a href={`https://t.me/share/url?url=${window.location.href}&text=${topic}`} target="_blank" rel="noopener noreferrer">
                        <button onClick={() => setSharePopup(false)} className="popup-btn">
                            <div>
                                <FaTelegramPlane />
                            </div>
                            <p>Telegram</p>
                        </button>
                    </a>

                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${topic}&summary=${para}&source=CESC NITP`} target="_blank" rel="noopener noreferrer">
                        <button onClick={() => setSharePopup(false)} className="popup-btn">
                            <div>
                                <FaLinkedin />
                            </div>
                            <p>LinkedIn</p>
                        </button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Share;