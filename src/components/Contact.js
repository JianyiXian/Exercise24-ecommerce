import Signin from "./Signin";

const Contact = () => {
    return (
        <div className="container w-25 mt-5">
            <Signin />
            <h3 className="p-3">Contact Us</h3>
            <form action="">
                <div className="p-3">
                    <label className="form-label" htmlFor="name">
                        Name:
                    </label>
                    <input className="form-control" type="text" id="name" />
                </div>
                <div className="p-3">

                    <label className="form-label" htmlFor="message">
                        Message:
                    </label>
                    <textarea className="form-control" name="message" id="message" rows="10"></textarea>
                    <button type="button" className="btn mt-3 mb-5 text-white"
                        style={{ backgroundColor: '#fec5bb' }}>Submit</button>
                </div>
            </form >
        </div >
    )
}

export default Contact;