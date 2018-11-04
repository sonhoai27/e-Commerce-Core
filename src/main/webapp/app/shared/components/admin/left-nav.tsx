import * as React from "react";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="sidebar">
        <div className="sidebar-content">
          <a className="sidebar-brand" href="index.html">
            <i className="align-middle" data-feather="box" />
            <span className="align-middle">Mix admin</span>
          </a>
          <ul className="sidebar-nav">
            <li className="sidebar-header">Main</li>
            <li className="sidebar-item">
              <a href="index.html" className="sidebar-link">
                <i className="align-middle" data-feather="sliders" />
                <span className="align-middle">Quản lý chung</span>
                <span className="sidebar-badge badge badge-primary">6</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                href="#pages"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="layout" />
                <span className="align-middle">Đơn hàng</span>
              </a>
              <ul
                id="pages"
                className="sidebar-dropdown list-unstyled collapse "
              >
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-sign-in.html">
                    Sign In
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-sign-up.html">
                    Sign Up
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-reset-password.html">
                    Reset Password
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-blank.html">
                    Blank Page
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-invoice.html">
                    Invoice
                    <span className="sidebar-badge badge badge-primary">
                      New
                    </span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-404.html">
                    404 Page
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-500.html">
                    500 Page
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                href="#layouts"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="monitor" />
                <span className="align-middle">Sản phẩm</span>
              </a>
              <ul
                id="layouts"
                className="sidebar-dropdown list-unstyled collapse "
              >
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="layouts-sidebar-sticky.html"
                  >
                    Tất cả sản phẩm
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="layouts-sidebar-collapsed.html"
                  >
                    Nhóm sản phẩm
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="layouts-boxed.html">
                    Đa thuộc tính
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                href="#categories"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="book-open" />
                <span className="align-middle">Danh mục</span>
              </a>
              <ul
                id="categories"
                className="sidebar-dropdown list-unstyled collapse "
              >
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="layouts-sidebar-sticky.html"
                  >
                    Sticky Sidebar
                    <span className="sidebar-badge badge badge-primary">
                      New
                    </span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="layouts-sidebar-collapsed.html"
                  >
                    Collapsed Sidebar
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="layouts-boxed.html">
                    Boxed Layout
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="documentation.html">
                <span className="align-middle">Khách hàng</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="documentation.html">
                <span className="align-middle">Báo cáo</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#ui" data-toggle="collapse"
                className="sidebar-link collapsed">
                <i className="align-middle" data-feather="book-open" />
                <span className="align-middle">Khuyến mãi</span>
              </a>
              <ul
                id="ui"
                className="sidebar-dropdown list-unstyled collapse "
              >
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="layouts-sidebar-sticky.html"
                  >
                    Sticky Sidebar
                    <span className="sidebar-badge badge badge-primary">
                      New
                    </span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="layouts-sidebar-collapsed.html"
                  >
                    Collapsed Sidebar
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="layouts-boxed.html">
                    Boxed Layout
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="documentation.html">
                <span className="align-middle">Tài khoản</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                href="#charts"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="pie-chart" />
                <span className="align-middle">Mix App Market</span>
                <span className="sidebar-badge badge badge-primary">
                  Coming soon
                </span>
              </a>
              <ul
                id="charts"
                className="sidebar-dropdown list-unstyled collapse "
              >
                <li className="sidebar-item">
                  <a className="sidebar-link" href="charts-chartjs.html">
                    Chart.js
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="charts-apexcharts.html">
                    ApexCharts
                    <span className="sidebar-badge badge badge-primary">
                      New
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="documentation.html">
                <span className="align-middle">Finder</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                href="#forms"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="check-square" />
                <span className="align-middle">Cài đặt</span>
                <span className="sidebar-badge badge badge-secondary">7</span>
              </a>
              <ul
                id="forms"
                className="sidebar-dropdown list-unstyled collapse "
              >
                <li className="sidebar-item">
                  <a className="sidebar-link" href="forms-layouts.html">
                    Layouts
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="forms-basic-elements.html">
                    Basic Elements
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="forms-advanced-elements.html"
                  >
                    Advanced Elements
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="forms-input-groups.html">
                    Input Groups
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="forms-editors.html">
                    Editors
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="forms-validation.html">
                    Validation
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="forms-wizard.html">
                    Wizard
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                href="#tables"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="list" />
                <span className="align-middle">Tài liệu</span>
              </a>
              <ul
                id="tables"
                className="sidebar-dropdown list-unstyled collapse "
              >
                <li className="sidebar-item">
                  <a className="sidebar-link" href="tables-bootstrap.html">
                    Bootstrap
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="tables-datatables.html">
                    DataTables
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="sidebar-bottom d-none d-lg-block">
            <div className="media">
              <img
                className="rounded-circle mr-3"
                src="https://appstack.bootlab.io/img/avatar.jpg"
                alt="Chris Wood"
                width={40}
                height={40}
              />
              <div className="media-body">
                <h5 className="mb-1 text-white">Chris Wood</h5>
                <div className="text-light">
                  <i className="fas fa-circle text-success" /> Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default LeftNav;
