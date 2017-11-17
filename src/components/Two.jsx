import React, { Component } from 'react';

export default class Two extends Component {
  declareSubject = () => {}
  render () {
    return (
      <div className="wrapper">
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus officia ut id tenetur laboriosam, consequuntur rem cumque pariatur quod odio. Optio similique exercitationem earum iusto vitae enim, laboriosam. Repellat cupiditate earum suscipit nulla ipsa. Excepturi praesentium suscipit, dignissimos hic! Rerum tempora sed repudiandae sint, earum ipsam. Et explicabo ratione hic quae accusamus ab corporis illo natus officia, impedit ad recusandae eveniet tempore libero maxime voluptatem nesciunt harum magnam, tempora iure. Cumque sequi explicabo totam, veniam exercitationem provident quia. Velit beatae sunt nesciunt ipsam accusantium qui, consequuntur placeat sequi eligendi incidunt officiis commodi laudantium ipsum natus? Eius corporis animi repudiandae vero autem nostrum facere, officia quibusdam eos consequatur et dolorum quos cupiditate omnis molestias adipisci laboriosam assumenda dolor illum nihil possimus voluptate modi earum nemo? Tempora maiores a ipsam, iste cupiditate, officia? Eos cupiditate perferendis at explicabo animi ipsa, voluptatibus fugit numquam incidunt hic ad accusantium quas molestias, necessitatibus obcaecati ipsam id ratione laudantium! Delectus consequuntur minima doloremque laudantium, voluptate hic suscipit numquam ab cupiditate perferendis nihil sit? Culpa officiis ratione fuga, ipsam repudiandae! Mollitia minima quae beatae veniam autem, recusandae laborum quod et unde, officiis nam incidunt ratione ad iure molestiae provident voluptates! Sequi magni sint assumenda nobis eius.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div className="nested">
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
        </div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <code className="code">
          <pre className="code__content">{
            `.wrapper {
              display: grid;
              // grid-template-columns: 1fr 1fr 1fr; // fractions, recommended over %
              grid-template-columns: repeat(3, 1fr); // repeat three columns @ 1fr,
              grid-gap: 1em;
              // grid-auto-rows: 10em;
              grid-auto-rows: minmax(100px, auto); // all are 100px by default, but then auto if necessary
              .nested {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-auto-rows: 70px;
                grid-gap: 1em;
                & > div {
                  border: #333 1px solid;
                  padding: 1em;
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
