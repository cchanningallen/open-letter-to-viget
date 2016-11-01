import './Home.scss';

import React, { PropTypes, PureComponent } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import { getToday } from 'lib/util/dateTime';
import { firstNameLastLetter } from 'lib/util/formatting';
import Header from 'components/organisms/Header';
import Section from 'components/organisms/Section';
import CodeLink from 'components/atoms/CodeLink';


// $$('.team__list-name').map(el => el.innerHTML);
//    ...thanks, Chrome Dev Tools!
const NAMES = ["Emily Bloom", "Kat Stefanski", "Brian Williams", "Andy Rankin", "Albert Wavering", "Ally Fouts", "Amanda Ruehlen", "Becca James", "Becky Tornes", "Ben Travis", "Ben Eckerson", "Ben Tinsley", "Billy French", "Blair Culbreth", "Brandon Dorn", "Brian Landau", "Chris Manning", "Chris Jones", "Cindy Caldwell", "Claire Atwell", "Curt Arledge", "Dan Tello", "Dave Schools", "David Eisinger", "Eli Fatsi", "Elliott Muñoz", "Emily Perry", "Grace Canfield", "Greg Kohn", "Heather Muety", "Jackson Fox", "Jason Toth", "Jeremy Fields", "Jeremy Frank", "Josh Korr", "Justin Sinichko", "Kaitlyn Irvine", "Kelly Kenny", "Kevin Powers", "Kevin Vigneault", "Khanh Stenberg", "Laura Sweltz", "Lawson Kurtz", "Megan Zlock", "Mike Ackerman", "Mindy Wagner", "Minh Tran", "Mitch Daniels", "Natalie Reich", "Nate Hunzaker", "Owen Shifflett", "Patrick Reagan", "Paul Koch", "Ryan Stenberg", "Samantha Freda", "Samara Strauss", "Sarah Schraer", "Solomon Hawk", "Tom Osborne", "Tommy Marshall", "Trevor Davis", "Zach Robbins", "Zachary Porter", "Viget"];

const FORMATTED_NAMES = NAMES.map(name => firstNameLastLetter(name));

const SAMPLE_BUILD_SCAN_URI = "https://scans.gradle.com/s/mltba5qnktegg";

@cxHelpers
class Home extends PureComponent {
  render() {
    return (
      <div className={this.cx()}>
        <CodeLink className={this.cxEl('code-link')} />
        <Header names={FORMATTED_NAMES} day={getToday()} />
        <Section title="A Bit About Me">
          <p>
            I've been a software engineer since just after college - not coincidentally also the time I realized the Economics/Finance degree I'd just earned didn't correspond with what I wanted to give to the world. I wanted to create value, not just shuffle it around! So I moved to San Francisco, hope-rich and cash-poor.
          </p>
          <p>
            I snagged an entry-level startup job and began coding - days, nights, and weekends. I was (and continue to be) obsessed with doing things right. Sure, getting it to work was a rush, but I wanted something more - the best practice, the highest quality, the cleanest, simplest solution. I guess my passion/obsession paid off - I advanced quickly, and was promoted to a core product team engineer 8 months after I joined the company.
          </p>
          <p>
            I grew as an engineer, integrating GOF's Design Patterns and Fowler's Refactoring while helping rebuild our legacy MERB monolith as a shiny, comprehensively-tested Rails SOA. Half a year later, feeling the winds blowing towards JavaScript, I pushed for more and more front-end assignments. When the time came to build a state-heavy graphical user interface for CrowdFlowers custom markup language in 2014, my colleague and I recommended a fascinating new tool from Facebook: React.js ...and I fell in love.
          </p>
          <p>
            The two years since then have been incredible. I've traveled the world as a contractor, led front-end development for a team spanning three continents, and architected two React/Redux/SASS(BEM)/Webpack codebases from the ground up. I've mentored several less-experienced engineers, all of whom now teach me on a regular basis. I'm thrilled by the potential for Augmented Reality to enhance the means by which we interact with information.
          </p>
          <p>
            While remote work has been fun, I've just wrapped up a two-month travel stint and am ready to commit full-time to a company here in Boulder. I'm looking for a smart, passionate team that cares deeply about what they build and why they're building it.
          </p>
        </Section>

        <Section title="How I Approach My Work">
          <p>
            My work is my gift to the world. It's not something I do to enable a fulfilling life; it is a crucial component of a fulfilling life, for me.
          </p>
          <p>
            As such, I take it seriously. I approach my work with humility and dedication; I will never be a "master" - there's always something more to learn, some way I can improve. This aligns well with my natural proclivity to seek understanding. I love the process of learning, as well as teaching what I've learned to others (for me, I know I've really "got" something when I can teach it ably).
          </p>
          <p>
            I demand the best from what I produce. It's my "mark on the world", if you will, and I strive for it to the most positive tiny-dent-in-the-universe that it can be. I avoid cutting corners unless absolutely necessary to meet a deadline, and document for fixing when I do. I seek always to write code for the next engineer - not just to solve the problem at hand. My experience in application development has consistently proven how often code changes in the lifetime of a product. Writing for the next engineer (i.e., simply and understandably) ensures consistent team velocity and consistent code quality over the long term.
          </p>
          <p>
            Products are built by people. I don't seek to be the most productive programmer at a company - I seek to maximize my team's productivity by giving thoughtful code review, forging real relationships that take into account the humanity of my colleagues, and - of course - leading by example in what I create.
          </p>
          <p>
            Finally, I am indefatigably positive. I feel immense gratitude just to be alive and healthy in this world. I thrive in environments where my colleagues share similar attitudes.
          </p>
        </Section>
        <Section title="Something Cool I Built">
          <p>
            An example of my recent work is <a target="_window" href={SAMPLE_BUILD_SCAN_URI}>Gradle Build Scans</a>. I architected this application from the ground up and led its front-end development.
          </p>
          <p>
            I'm proud of this work because of the complexity involved: potentially 100k+ rows of data, client-side search, pixel-perfect design, and no compromise in performance - the app loads in 1-2s and most transitions / user feedback clock in at under 100ms (my benchmark for interactions, since it results in the perception of immediate response to the user).
          </p>
          <p>
            Also! I'd love to share my work for CrowdFlower, but it's all locked away inside an auth-walled garden :( I'd be happy to demo what I've built there in-person on my own machine.
          </p>
        </Section>
        <Section title="Salary Requirements" expandable={false}>
          <p>
            Since Boulder isn't San Francisco, I'm looking for $120-130,000. My last salary was $145,000, and my last contract rate was $165/hour.
          </p>
          <p>
            <strong>At the end of the day, however, I care more about loving my work than maximizing my income.</strong> I'm confident we can find a number that works if this is a good fit on both sides.
          </p>
        </Section>
        <Section title="In Conclusion..." expandable={false}>
          <p>
            Thank you so much for your consideration! Regardless of what happens, I'm thrilled a company like Viget exists and wish you the absolute best. Keep up the great work :)
          </p>
        </Section>
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
