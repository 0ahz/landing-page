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
        <div className="beian">鄂ICP备17028017号-1</div>
      </>
    );
  }
}
