import * as React from "react";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white">
        <a className="sidebar-toggle d-flex mr-2">
          <i className="hamburger align-self-center" />
        </a>
        <form className="form-inline d-none d-sm-inline-block">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search projects"
            aria-label="Search"
          />
        </form>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle"
                href="#"
                id="messagesDropdown"
                data-toggle="dropdown"
              >
                <div className="position-relative">
                  <i className="align-middle" data-feather="message-circle" />
                  <span className="indicator">4</span>
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                aria-labelledby="messagesDropdown"
              >
                <div className="dropdown-menu-header">
                  <div className="position-relative">4 New Messages</div>
                </div>
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatar-5.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="Ashley Briggs"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">Ashley Briggs</div>
                        <div className="text-muted small mt-1">
                          Nam pretium turpis et arcu. Duis arcu tortor.
                        </div>
                        <div className="text-muted small mt-1">15m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatar-2.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="Carl Jenkins"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">Carl Jenkins</div>
                        <div className="text-muted small mt-1">
                          Curabitur ligula sapien euismod vitae.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatar-4.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="Stacie Hall"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">Stacie Hall</div>
                        <div className="text-muted small mt-1">
                          Pellentesque auctor neque nec urna.
                        </div>
                        <div className="text-muted small mt-1">4h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatar-3.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="Bertha Martin"
                        />
                      </div>
                      <div className="col-10 pl-2">
                        <div className="text-dark">Bertha Martin</div>
                        <div className="text-muted small mt-1">
                          Aenean tellus metus, bibendum sed, posuere ac, mattis
                          non.
                        </div>
                        <div className="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="#" className="text-muted">
                    Show all messages
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle"
                href="#"
                id="alertsDropdown"
                data-toggle="dropdown"
              >
                <div className="position-relative">
                  <i className="align-middle" data-feather="bell-off" />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                aria-labelledby="alertsDropdown"
              >
                <div className="dropdown-menu-header">4 New Notifications</div>
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <i
                          className="text-danger"
                          data-feather="alert-circle"
                        />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Update completed</div>
                        <div className="text-muted small mt-1">
                          Restart server 12 to complete the update.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <i className="text-warning" data-feather="bell" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Lorem ipsum</div>
                        <div className="text-muted small mt-1">
                          Aliquam ex eros, imperdiet vulputate hendrerit et.
                        </div>
                        <div className="text-muted small mt-1">6h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <i className="text-primary" data-feather="home" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Login from 192.186.1.1</div>
                        <div className="text-muted small mt-1">8h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row no-gutters align-items-center">
                      <div className="col-2">
                        <i className="text-success" data-feather="user-plus" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">New connection</div>
                        <div className="text-muted small mt-1">
                          Anna accepted your request.
                        </div>
                        <div className="text-muted small mt-1">12h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="#" className="text-muted">
                    Show all notifications
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                data-toggle="dropdown"
              >
                <span className="d-inline-block d-md-none">
                  <i className="align-middle" data-feather="settings" />
                </span>
                <span className="d-none d-sm-inline-block">
                  <img
                    src="https://appstack.bootlab.io/img/avatar.jpg"
                    className="avatar img-fluid rounded-circle mr-1"
                    alt="Chris Wood"
                  />
                  <span className="text-dark">Chris Wood</span>
                </span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="align-middle mr-1" data-feather="user" />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="align-middle mr-1" data-feather="pie-chart" />
                  Analytics
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Settings &amp; Privacy
                </a>
                <a className="dropdown-item" href="#">
                  Help
                </a>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNav;
