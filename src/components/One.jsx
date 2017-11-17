import React, { Component } from 'react';

export default class One extends Component {
  declareSubject = () => {}
  render () {
    return (
      <div className="wrapper">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, cumque, ipsum. Nesciunt reiciendis fugit nihil dolorem excepturi nulla velit. Impedit consequuntur aliquam accusantium quam perferendis, molestias labore deserunt. Suscipit, soluta perspiciatis ducimus nulla itaque, non ex tempore doloremque minima consectetur, sed, sunt corporis doloribus accusamus expedita officia reprehenderit quod recusandae atque! Quaerat perspiciatis dolorem, vitae quia doloremque earum, distinctio, libero cupiditate ipsum, iste officia. Eum laborum sed modi unde facere numquam possimus doloribus, doloremque quis aut deleniti tempora. Iusto, dolor!
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nisi, repellat. Velit deleniti commodi nemo magni totam reprehenderit laudantium soluta eligendi libero quaerat neque quas, unde ipsam iusto, nisi architecto.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, cumque, ipsum. Nesciunt reiciendis fugit nihil dolorem excepturi nulla velit. Impedit consequuntur aliquam accusantium quam perferendis, molestias labore deserunt. Suscipit, soluta perspiciatis ducimus nulla itaque, non ex tempore doloremque minima consectetur, sed, sunt corporis doloribus accusamus expedita officia reprehenderit quod recusandae atque! Quaerat perspiciatis dolorem, vitae quia doloremque earum, distinctio, libero cupiditate ipsum, iste officia. Eum laborum sed modi unde facere numquam possimus doloribus, doloremque quis aut deleniti tempora. Iusto, dolor!
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nisi, repellat. Velit deleniti commodi nemo magni totam reprehenderit laudantium soluta eligendi libero quaerat neque quas, unde ipsam iusto, nisi architecto.
        </div>
        <code className="code">
          <pre className="code__content">{
            `.wrapper {
              display: grid;
              grid-template-columns: 40% 30% 40%;
              /*grid-column-gap: 1em;
              grid-row-gap: 1em;*/
              grid-gap: 1em;
              div {
                background: #eee;
                padding: 1em;
                :nth-child(odd){
                  background: #ddd;
                }
              }
            }`
          }
          </pre>
        </code>
      </div>
    );
  }
}
