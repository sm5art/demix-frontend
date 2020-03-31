import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          type="text/javascript"
          data-cfasync="false"
          dangerouslySetInnerHTML={{
            __html: `/*<![CDATA[/* */
          var _pop = _pop || [];
          _pop.push(['siteId', 3951719]);
          _pop.push(['minBid', 0]);
          _pop.push(['popundersPerIP', 0]);
          _pop.push(['delayBetween', 0]);
          _pop.push(['default', false]);
          _pop.push(['defaultPerDay', 0]);
          _pop.push(['topmostLayer', false]);
          (function() {
            var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
            var s = document.getElementsByTagName('script')[0]; 
            pa.src = '//c1.popads.net/pop.js';
            pa.onerror = function() {
              var sa = document.createElement('script'); sa.type = 'text/javascript'; sa.async = true;
              sa.src = '//c2.popads.net/pop.js';
              s.parentNode.insertBefore(sa, s);
            };
            s.parentNode.insertBefore(pa, s);
          })();
        /*]]>/* */`,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
