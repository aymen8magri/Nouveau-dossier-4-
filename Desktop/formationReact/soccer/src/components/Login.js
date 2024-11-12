import React from 'react'

// Login component to display the login page.
export default function Login() {
  return (
    <div>
      <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Login</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <form action="#">
                                
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary py-3 px-5" defaultValue="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 ml-auto">
                            <img src="images/login.jpeg" alt="Image" className="img-fluid mb-5" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
