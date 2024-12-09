import { validateForm } from "../../assets/js";

export default function () {
    const topFunction = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="contact" style={{
                backgroundColor: "white",
                minHeight: "100vh",
                padding: "50px 100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundSize: "cover",
                backgroundImage: "url(./images/contact_us_background.jpg)"
            }}>
                <button onClick={() => topFunction()} id="myBtn" title="Go to top">
                    <i className="bi bi-caret-up-fill"></i>
                </button>
                <div className="content" style={{ fontSize: "36px", fontWeight: 500, color: "#fff" }}>
                    <h2>Contact Us</h2>
                    <p style={{ fontWeight: 300, color: "#fff" }}>We will get back to you within 24 hours!</p>
                </div>
                <div className="container" style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px"
                }}>
                    <div className="contactInfo" style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div className="box" style={{
                            position: "relative",
                            padding: "20px 0",
                            display: "flex"
                        }}>
                            <div className="icon" style={{
                                minWidth: "60px",
                                height: "60px",
                                background: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                fontSize: "22px"
                            }}>
                                <i className="bi bi-house-fill"></i>
                            </div>
                            <div className="text" style={{
                                display: "flex",
                                marginLeft: "20px",
                                fontSize: "16px",
                                alignItem: 'center',
                                color: "#fff",
                                fontWeight: 300
                            }}>
                                <h3 style={{ fontWeight: 500, color: "#00bcd4", minWidth: "4rem", width: "8rem" }}>Address</h3>
                                <p style={{ margin: "0", maxWidth: "18rem" }}>250 Hoang Quoc Viet, <br/>Ward Co Nhue, <br/> District Cau Giay, <br/>Ha Noi City</p>
                            </div>
                        </div>
                        <div className="box" style={{
                            position: "relative",
                            padding: "20px 0",
                            display: "flex"
                        }}>
                            <div className="icon" style={{
                                minWidth: "60px",
                                height: "60px",
                                background: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                fontSize: "22px"
                            }}>
                                <i className="bi bi-envelope-fill"></i>
                            </div>
                            <div className="text" style={{
                                display: "flex",
                                marginLeft: "20px",
                                fontSize: "16px",
                                color: "#fff",
                                fontWeight: 300
                            }}>
                                <h3 style={{ fontWeight: 500, color: "#00bcd4", minWidth: "4rem", width: "8rem"  }}>Email</h3>
                                <p style={{ margin: "0" }}>mait51315@gmail.com</p>
                            </div>
                        </div>
                        <div className="box" style={{
                            position: "relative",
                            padding: "20px 0",
                            display: "flex"
                        }}>
                            <div className="icon" style={{
                                minWidth: "60px",
                                height: "60px",
                                background: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                fontSize: "22px"
                            }}>
                                <i className="bi bi-telephone-fill"></i>
                            </div>
                            <div className="text" style={{
                                display: "flex",
                                marginLeft: "20px",
                                fontSize: "16px",
                                color: "#fff",
                                fontWeight: 300
                            }}>
                                <h3 style={{ fontWeight: 500, color: "#00bcd4", minWidth: "4rem", width: "8rem"  }}>Phone</h3>
                                <p style={{ margin: "0" }}>+84327182537</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm" style={{
                        width: "40%",
                        padding: "40px",
                        background: "#fff"
                    }}>
                        <form action="index.html" name="contactForm" onSubmit={(e) => {
                            e.preventDefault();
                            return validateForm();
                        }}>
                            <h2 style={{ fontSize: "30px", color: "#333", fontWeight: 500, margin: "0" }}>Send Message</h2>
                            <div className="inputBox" style={{ position: "relative", width: "100%" }}>
                                <input type="text" placeholder="Full name" id="fname" required style={{
                                    width: "100%",
                                    padding: "5px 0",
                                    fontSize: "16px",
                                    margin: "10px 0",
                                    border: "none",
                                    borderBottom: "2px solid #333",
                                    outline: "none"
                                }} />
                            </div>
                            <div className="inputBox" style={{ position: "relative", width: "100%" }}>
                                <input type="text" id="email" placeholder="Email" required style={{
                                    width: "100%",
                                    padding: "5px 0",
                                    fontSize: "16px",

                                    margin: "10px 0",
                                    border: "none",
                                    borderBottom: "2px solid #333",
                                    outline: "none"
                                }} />
                            </div>
                            <div className="inputBox" style={{ position: "relative", width: "100%" }}>
                                <textarea required id="msg" placeholder="Type your message..." style={{
                                    width: "100%",
                                    padding: "5px 0",
                                    fontSize: "16px",
                                    margin: "10px 0",
                                    border: "none",
                                    borderBottom: "2px solid #333",
                                    outline: "none",
                                    resize: "none"
                                }}></textarea>
                            </div>
                            <div className="inputBox" style={{ position: "relative", width: "100%" }}>
                                <input type="submit" value="Send" style={{
                                    width: "100px",
                                    background: "#00bcd4",
                                    color: "#fff",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "10px",
                                    fontSize: "18px"
                                }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.4389580910963!2d105.78344193792984!3d21.046543713866296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b4220c2bd%3A0x1c9e359e2a4f618c!2sB%C3%A1ch%20Khoa%20Aptech!5e1!3m2!1svi!2s!4v1727750674774!5m2!1svi!2s"
                width="1200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                style={{ padding: "50px 50px", width: "100%", height: "600px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            </iframe>
        </>
    );
}
