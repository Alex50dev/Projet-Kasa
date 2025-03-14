import React from "react";
import "../styles/components/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Pied de page du site">
      <div className="footer-content">
        <div className="footer-logo-container">
          <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12.1445 20.7402L5.62785 27.4038V36.7544H0.5V0.641846H5.62785V20.8477L25.0709 0.641846H30.9466L15.6699 16.871L32.0149 36.7544H26.0324L12.1445 20.7402Z" fill="white" />
          </svg>
          <div className="logo-house">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M27.141 11.6328L14.4282 4.21685L7.37743 0.13269L0.433472 12.2777L0.5403 23.6703L13.1463 31.0863L14.4282 30.334V19.5862L20.0902 9.59074L25.859 12.9226V23.6703L27.141 22.918V11.6328Z" fill="white" />
            </svg>
            <div className="logo-rectangle">
              <svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M0.594604 2.55368V9.86218L3.69268 8.03505V0.726562L0.594604 2.55368Z" fill="white" />
              </svg>
            </div>
          </div>
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0.405396 24.8526L2.43517 20.9834C4.78543 22.5956 8.41766 23.7778 11.9431 23.7778C16.5367 23.7778 18.3529 22.3806 18.3529 20.0161C18.3529 13.8899 1.1532 19.1563 1.1532 8.30101C1.1532 3.35703 5.53325 0.13269 12.4772 0.13269C16.0026 0.13269 20.0621 1.09999 22.4124 2.60468L20.2758 6.47388C17.8187 4.86172 15.148 4.32433 12.4772 4.32433C8.204 4.32433 6.0674 5.93649 6.0674 8.08605C6.0674 14.5347 23.267 9.26831 23.267 19.9086C23.267 24.8526 18.7802 27.9694 11.5157 27.9694C7.1357 28.0769 2.64883 26.6797 0.405396 24.8526Z" fill="white" />
          </svg>
          <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M24.5 11.2027V27.7543H19.7995V24.1001C18.197 26.5721 15.0989 27.9693 10.8257 27.9693C4.62958 27.9693 0.783691 24.6374 0.783691 19.9084C0.783691 15.5018 3.56127 11.9551 11.6804 11.9551H19.479V10.9878C19.479 6.79613 17.0219 4.43161 12.2145 4.43161C9.00961 4.43161 5.69788 5.61387 3.56127 7.33352L1.5315 3.57179C4.30908 1.31476 8.36863 0.0250244 12.7487 0.0250244C20.3336 0.132502 24.5 3.78675 24.5 11.2027ZM19.5858 19.371V15.5018H12.0009C7.08667 15.5018 5.69788 17.4364 5.69788 19.6935C5.69788 22.3804 7.94131 24.1001 11.6804 24.1001C15.4194 24.2075 18.4107 22.5954 19.5858 19.371Z" fill="white" />
          </svg>
        </div>
        <p lang="en">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;