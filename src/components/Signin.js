const Signin = () => {
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h5 className="modal-title">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <form action="">
                            <div className="mb-3">
                                <label className="col-form-label" htmlFor="email">Email</label>
                                <input className="form-control" type="email" id="email" />

                            </div>
                            <div>
                                <label className="col-form-label" htmlFor="password">Password</label>
                                <input className="form-control" type="password" id="password" />

                            </div>
                        </form>

                    </div>

                    <div className="modal-footer">
                        <button className="btn text-white" style={{ backgroundColor: "#fec5bb" }}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;