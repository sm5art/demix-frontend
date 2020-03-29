import React from 'react';

import { Row, Col } from 'antd';
import theme from '../theme';

const Footer = () => (
    <footer style={{textAlign: 'center', paddingBottom: theme.spacing.medium}}>
                    <a style={{marginRight: theme.spacing.small}} href="mailto:contactdemix@gmail.com">Contact Us</a>
                    &copy; Copyright {(new Date()).getFullYear()} unmix

                    <form style={{marginTop: theme.spacing.small}} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="73X3RCSX26H9L" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
    </footer>
);

export default Footer;