import { Link } from "react-router-dom"

function Header() {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src="/nonpawiz.png" alt="" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div> */}
        </div>
    )
}

export default Header