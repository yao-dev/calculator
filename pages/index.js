import Calculator from 'components/Calculator/Calculator';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
        <style global jsx>{`
          body {
            margin: 0px;
            padding: 0px;
            background: linear-gradient(to left, #8DC26F, #76b852); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            font-family: sans-serif;
          }
        `}</style>
      </div>
    );
  }
}
