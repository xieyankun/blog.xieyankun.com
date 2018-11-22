import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <span>Copyright © 2017-2018
                </span>|
                <span>
            <a href="" className="copyright-links" rel="nofollow">Kira's Site</a>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          Powered by <a href="">Kira</a>
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {

};

export default Footer;
