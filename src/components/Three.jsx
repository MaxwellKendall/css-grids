import React, { Component } from 'react';

export default class Three extends Component {
  declareSubject = () => {}
  render () {
    return (
      <div className="wrapper">
        <div className="box box1">Box 1</div>
        <div className="box box2">Box 2</div>
        <div className="box box3">Box 3</div>
        <div className="box box4">Box 4</div>
        <code className="code">
          <pre className="code__content">{
            `.wrapper {
              display: grid;
              grid-template-columns: 1fr 2fr 1fr;
              grid-auto-rows: minmax(10em, auto);
              grid-gap: 1em;
              // justify-items: start / center / end / strech;
              // align-items: start / end / stretch / center;
              justify-items: stretch; // strech is default
              align-items: stretch; // strech is default
              .box1 {
                // align-self: start;
                grid-column: 1/3;
                grid-row: 1/3;
              }
              .box2 {
                // align-self: end;
                grid-column: 3;
                grid-row: 1/3
              }
              .box3 {
                // align-self: end;
                grid-column: 2/4;
                grid-row: 3;
              }
              .box4 {
                grid-column: 1;
                grid-row: 2/4;
                border: 1px solid #333;
              }
            }`
          }
          </pre>
      </code>
    </div>
    );
  }
}
