<template>
  <header-card title="Email Templates" tags="HTML,CSS/SASS,PugJS" :url="url" :container="container" :heading="heading" id="working-emails">
    <div class="image-container" slot="image">
      <div class="email-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548 238" aria-labelledby="emailTitle">
          <title id="emailTitle">Screenshots of email templates</title>
          <defs>
            <g id="phone">
              <path class="device" d="M103.9,1.3H14.1c-7,0-12.7,6.7-12.7,15l0,0v205.5c0,8.3,5.7,15,12.7,15h89.7c7,0,12.8-6.7,12.8-15c0,0,0,0,0,0V16.3C116.6,8,110.9,1.3,103.9,1.3L103.9,1.3z M110.7,210.4H7.3V27.6h103.4V210.4z"/>
              <rect class="speaker" x="48.3" y="13.7" width="21.3" height="3" rx="1.5" ry="1.5"/>
              <circle class="home-button" cx="59" cy="223.7" r="8"/>
            </g>
            <g id="browser">
              <path class="bar" d="M136.7,16.4H1.7V4.6c0-1.1,0.9-2,2-2h131c1.1,0,2,0.9,2,2V16.4z" />
              <circle class="bar-button" cx="10.1" cy="9.5" r="2.1"/>
              <circle class="bar-button" cx="16.9" cy="9.5" r="2.1"/>
              <circle class="bar-button" cx="23.7" cy="9.5" r="2.1"/>
            </g>
          </defs>
          <g class="phone">
            <pattern id="eventScreen" patternUnits="userSpaceOnUse" x="6.3" y="26.7" width="105.4" height="185">
              <image xlink:href="/img/event-m.jpg" x="0" y="0" width="105.4" height="185" preserveAspectRatio="xMidYMin slice" />
            </pattern>
            <rect class="content" x="6.3" y="26.7" width="105.4" height="185" fill="url(#eventScreen)"/>
            <use xlink:href="#phone" x="0" y="0" />
          </g>
          <g class="browser">
            <pattern id="newsScreen" patternUnits="userSpaceOnUse" x="1.7" y="16.3" width="134.6" height="221.7">
              <image xlink:href="/img/enews.jpg" x="0" y="0" width="134.6" height="221.7" preserveAspectRatio="xMidYMin slice" />
            </pattern>
            <path class="content" d="M134.7,236.7H3.7c-1.1,0-2-0.9-2-2V16.3h135v218.4C136.7,235.8,135.8,236.7,134.7,236.7z" fill="url(#newsScreen)" transform="translate(130 0)" />
            <use xlink:href="#browser" x="130" y="0" />
          </g>
          <g class="browser">
            <pattern id="travelScreen" patternUnits="userSpaceOnUse"  x="1.7" y="16.3" width="134.6" height="221.7">
              <image xlink:href="/img/travel.jpg" x="0" y="0" width="134.6" height="221.7" preserveAspectRatio="xMidYMin slice" />
            </pattern>
            <path class="content" d="M134.7,236.7H3.7c-1.1,0-2-0.9-2-2V16.3h135v218.4C136.7,235.8,135.8,236.7,134.7,236.7z" fill="url(#travelScreen)" transform="translate(280 0)" />
            <use xlink:href="#browser" x="280" y="0" />
          </g>
          <g class="phone">
            <pattern id="magazineScreen" patternUnits="userSpaceOnUse" x="6.3" y="26.7" width="105.4" height="185">
              <image xlink:href="/img/magazine-m.jpg" x="0" y="0" width="105.4" height="185" preserveAspectRatio="xMidYMin slice" />
            </pattern>
            <rect class="content" x="6.3" y="26.7" width="105.4" height="185" fill="url(#magazineScreen)" transform="translate(430 0)"/>
            <use xlink:href="#phone" x="430" y="0" />
          </g>
        </svg>
      </div>
    </div>
    <p slot="description" :class="dclass">Developed a Mailchimp template library that allows a developer to rapidly produce a suite of modern and cross-client email templates for users with little to no HTML/CSS experience.</p>
  </header-card>
</template>
<script>
  import HeaderCard from '~/components/HeaderCard';
  export default {
    components: {
      HeaderCard
    },
    props: {
      container: String,
      heading: String,
      dclass: String,
      url: String
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .card {
    background: #f9f8f8 linear-gradient(180deg, #fff, #f9f8f8);
  }

  .device,
  .home-button,
  .bar {
    fill: #dbdbdb;
  }
  .device,
  .content,
  .bar {
    stroke-width:0.02em;
    stroke: #cbcbcb;
  }
  .home-button{
    stroke-width:0.07em;
    stroke: #bfbfbf;
  }
  .speaker,
  .bar-button{
    fill:#bfbfbf;
  }
  svg {
    display:block;
    filter: drop-shadow(0 0 0.75rem rgba(0,0,0,0.2));
    margin: 0 1rem;
    height: 40vh;

    @include bp(md) {
      width: auto;
      height: 65vh;
    }
  }
</style>
