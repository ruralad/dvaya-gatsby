import React, { Component } from "react";
class ProgramSection extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
      };
    }
    render() {
      return (
        <article id="programsArticle">
          <div className="programs">
            <h1>Some Of Our Active Programs</h1>
            <p>
              <i>ONE RUPEE REVOLUTION</i> <br />
              One rupee revolution was started with the goal of giving financial
              assistance to those who are suffering from diseases and other
              problems. On each Friday, a single rupee is collected from every
              student and it will be donated to the fund.
            </p>
            <p>
              <i>MASHITHANDU</i> <br />
              In regards with the beginning of the new acadamic year we had
              provided necessary study materials for the lower and upper primary
              students. Eventhough we think it's only a little ray of hope but for
              them it will a great relief and a source of encouragement.
            </p>
            <p>
              <i>OORINORUNU</i> <br />
              We always give first priority to the lower section of our society
              and we lend our love to them in the form of food . On 27th of every
              month we deliver food to people in Kallemada Kudi, a adhivasy
              colony, as a protest against the brutal murder of the young man
              named Madhu for stealing food.
            </p>
            <p>
              <i>KAITHAANGU</i> <br />
              One of the most revolutionary and popular Campaign taken by the SFI
              GECI that target to help the poor and needy.Under this campaign we
              provide a full course meal to the patients and bystanders at the
              Idukki Government Medical College
            </p>
          </div>
        </article>
      );
    }
  }
  export default ProgramSection;
