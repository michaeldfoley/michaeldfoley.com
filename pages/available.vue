<template>
  <main class="container" id="main">
    <header class="resume-header">
      <h1>Michael Foley</h1>
      Front-end Developer | Brooklyn, NY<br>
      <a href="mailto:mike@foley.is">mike@foley.is</a>
    </header>
    <section class="resume-area">
      <header>
        <h2 class="section-header">Work Experience</h2>
      </header>
      <section>
        <header>
          <h3>Assistant Director of Front End and User Experience</h3>
          <h4>Fordham University (July 2017–present)</h4>
        </header>
        <ul>
          <li>Front End development using advanced CSS3, HTML5, Vanilla JavaScript</li>
          <li>Led a project to improve the accessibility of the entire University's web presence, where I refactored templates and wrote CSS and JavaScript fixes for third party software</li>
          <li>Wrote a custom email preference front and back end to sync user responses across multiple ESPs using the MailChimp and IBM Marketing Cloud APIs</li>
          <li>Built a custom calendar front end that took advantage of CSS Grid and Flexbox</li>
        </ul>
      </section>
      <section>
        <header>
          <h3>Senior E-Communications Manager</h3>
          <h4>Fordham University (September 2010–July 2017)</h4>
        </header>
        <ul>
          <li>Used Ruby/Sinatra to scrape donor data from a campaign website and live-update the results section of campaign emails</li>
          <li>Created a modular email template generator with PugJS where reusable components allow the user to quickly generate responsive/cross-client email templates</li>
        </ul>
      </section>
    </section>
    <section class="resume-area">
      <header>
        <h2 class="section-header">Other Projects</h2>
      </header>
      <section>
        <h3>Accessibility WP Plugin</h3>
        <p>Adds accessibility features to the Wordpress admin including a computer vision-based alt tag generator</p>
      </section>
      <section>
        <h3>Playlist</h3>
        <p>Angular app for guests to collaborate on a Spotify playlist directly on our site</p>
      </section>
      <section>
        <h3>Photo Gallery</h3>
        <p>Angular/Firebase app to send a customized photo set to each wedding guest</p>
      </section>
    </section>
    <section class="resume-area skills">
      <header>
        <h2 class="section-header">Skills</h2>
      </header>
      <section>
        <ul>
          <li>Javascript</li>
          <li>Vue</li>
          <li>Nuxt</li>
        </ul>
        <ul>
          <li>CSS3</li>
          <li>Stylus</li>
          <li>SASS</li>
          <li>SCSS</li>
        </ul>
        <ul>
          <li>GSAP</li>
          <li>CSS Animation</li>
        </ul>
        <ul>
          <li>HTML5</li>
          <li>Pug</li>
        </ul>
        <ul>
          <li>Accessibility</li>
          <li>WCAG</li>
        </ul>
        <ul>
          <li>PHP</li>
          <li>Wordpress</li>
          <li>MySQL</li>
        </ul>
        <ul>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Sinatra</li>
        </ul>
        <ul>
          <li>Firebase</li>
          <li>Heroku</li>
          <li>AWS</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>Github</li>
        </ul>
        <ul>
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
        </ul>
        <ul>
          <li>After Effects</li>
          <li>Premiere</li>
        </ul>
      </section>
    </section>

    <section class="resume-area">
      <header>
        <h2 class="section-header">Education</h2>
      </header>
      <ul>
        <li>Certificate, User Experience Design, General Assembly (2013)</li>
        <li>MS, Media Management, Fordham University (2010)</li>
        <li>BS, Psychology and Visual Arts, Fordham University (2007)</li>
      </ul>
    </section>
  </main>
</template>

<script>

export default {
  head: {
    title: 'Resume'
  }
};
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  p {
    margin-top: 0;
  }

  .resume-header {
    text-align: center;
    padding: 8rem 0 6rem;

    h1 {
      margin: 0 0 0.3rem;
    }

    small {
      display: block;
      font-size: 1rem;
    }
  }
  .resume-area {
    @media screen and (min-width: 51rem) {
      display: grid;
      grid-template-columns: minmax(min-content, 15rem) minmax(40ch, 65ch);
      grid-auto-rows: min-content;
      grid-column-gap: 10rem;
      justify-content: center;
    }

    > header {
      grid-row: span 10;
    }
    .section-header {
      margin-bottom: 1rem;
      position: sticky;
      top: 5px;

      @media screen and (min-width: 51rem) {
        margin-bottom: 8rem;
      }
    }

    section:last-child ul:last-child {
      margin-bottom: 0;
    }

    h2, h3, h4 {
      margin: 0;
    }

    h4 {
      font-weight: 400;
    }

    > section {
      grid-column: 2;
      margin-bottom: 2rem;

      &:last-child {
        border-bottom: 1px solid #dfdfdf;
        margin-bottom: 4rem;
        padding-bottom: 4rem;
      }
    }
  }
  .skills {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: inline-block;
    }
    li + li:before {
      content: '/';
      display: inline-block;
      margin: 0 1rem;
      color: #c4c4c4;
    }
  }
</style>
