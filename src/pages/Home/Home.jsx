import './Home.scss';

import React, { PropTypes, PureComponent } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import { getToday } from 'lib/util/dateTime';
import { firstNameLastLetter } from 'lib/util/formatting';
import sectionsConfig from './sectionsConfig';
import Header from 'components/organisms/Header';
import Section from 'components/organisms/Section';
import CodeLink from 'components/atoms/CodeLink';


// $$('.team__list-name').map(el => el.innerHTML);
//    ...thanks, Chrome Dev Tools!
const NAMES = ["Emily Bloom", "Kat Stefanski", "Brian Williams", "Andy Rankin", "Albert Wavering", "Ally Fouts", "Amanda Ruehlen", "Becca James", "Becky Tornes", "Ben Travis", "Ben Eckerson", "Ben Tinsley", "Billy French", "Blair Culbreth", "Brandon Dorn", "Brian Landau", "Chris Manning", "Chris Jones", "Cindy Caldwell", "Claire Atwell", "Curt Arledge", "Dan Tello", "Dave Schools", "David Eisinger", "Eli Fatsi", "Elliott Muñoz", "Emily Perry", "Grace Canfield", "Greg Kohn", "Heather Muety", "Jackson Fox", "Jason Toth", "Jeremy Fields", "Jeremy Frank", "Josh Korr", "Justin Sinichko", "Kaitlyn Irvine", "Kelly Kenny", "Kevin Powers", "Kevin Vigneault", "Khanh Stenberg", "Laura Sweltz", "Lawson Kurtz", "Megan Zlock", "Mike Ackerman", "Mindy Wagner", "Minh Tran", "Mitch Daniels", "Natalie Reich", "Nate Hunzaker", "Owen Shifflett", "Patrick Reagan", "Paul Koch", "Ryan Stenberg", "Samantha Freda", "Samara Strauss", "Sarah Schraer", "Solomon Hawk", "Tom Osborne", "Tommy Marshall", "Trevor Davis", "Zach Robbins", "Zachary Porter", "Viget"];

const FORMATTED_NAMES = NAMES.map(name => firstNameLastLetter(name));

const CONSOLE_EASTER_EGG = `
         gvvvv
        vvvvvvv
      .. gvvvg
    .
  .,
 .
.
,                                            ,
.                                         v,..,gI
.                              gg:.,.,gg g,.....g
..                           g,.........ivv,..,v
 ,.                    ,gvvvg............;vvvvvgg
   .,              .gvvvvvv.v............,vvv  ;vvvvvvvvvv
     ..         .vvvvvvvvvvgg ...........ivvv  ;vvvvvvvvg
       ...    vvvvvvvvvvvvvvvgi.........vvvvvvvvvvvvvvg
            vvvvvvvvvvvvvvvvvvIvvi., vvvvvvvvvvvvvg.
           vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvEEEE
         ivvvvvvvvvEEE                ,gvvvvvGEEE
        ;vvvvvGEEE                          Vvv  :E
        vvvEEEE                                gI
       v  gEE
          E

Well hello back!
I do have a curious mind, and your undercarriage is thrilling.
I'd love to meet you! My email is cchanningallen@gmail.com.

Also, please feel free to take a spin through my most recent work at 
https://scans.gradle.com/s/mltba5qnktegg, the front-end I built for Gradle.

Have a fantastic day :)
`;

@cxHelpers("Home")
class Home extends PureComponent {
  componentDidMount() {
    console.log(CONSOLE_EASTER_EGG);
  }

  renderSection({title, expandable, content}, key) {
    return <Section {...{title, expandable, key}}>{content}</Section>
  }

  render() {
    return (
      <div className={this.cx()}>
        <CodeLink className={this.cxEl('code-link')} />
        <Header names={FORMATTED_NAMES} day={getToday()} />
        {sectionsConfig.map(this.renderSection)}
      </div>
    );
  }
}

export default Home;












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ​
//
//
// Cheers,
//   Channing​
//
// --
//   Cheers!
//   Channing
// m 804-229-4822
