import 'isomorphic-unfetch';
import Head from 'next/head';

import '../styles/index.less';

export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://v2.jinrishici.com/one.json');
    const json = await res.json();
    return { poetry: json.data };
  }

  componentDidMount() {
    const { content, origin } = this.props.poetry;
    new Typed('.poetry', {
      strings: [`${content} — ${origin.author}`.replace('，', '^500，^1000').replace('。', '^500。')],
      typeSpeed: 80,
    });
  }

  render() {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <title>Friday.</title>
          <script src="https://cdn.bootcss.com/typed.js/2.0.9/typed.min.js" />
        </Head>
        <div className="background" />
        <div className="background bgimage" />
        <div className="wrp">
          <div className="text">
            <span className="poetry" />
          </div>
        </div>
        <div className="copyright">
          <span>© {new Date().getFullYear()} by </span>
          <span>0ahz / Next / Unsplash / jinrishici.com</span>
          <a
            href="https://github.com/0ahz/landing-page"
            aria-label="landing-page on GitHub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg viewBox="0 0 16 16" width="16" height="16">
              <g fill="#111111">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#111111"
                  d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"
                />
              </g>
            </svg>
          </a>
        </div>
      </>
    );
  }
}
