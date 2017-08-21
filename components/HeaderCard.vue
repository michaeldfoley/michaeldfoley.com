<template>
  <header id="pageHead" class="page-head">
    <div id="headline" class="headline">
      <h1 class="title">
        <span v-for="word in titleSplit">{{word}}</span>
      </h1>
      <aside class="meta">
        <ul class="meta-tags">
          <li v-for="tag in tagList">{{tag}}</li>
        </ul>
      </aside>
      <a v-if="url" :href="url" class="btn"><span>View the Project</span></a>
    </div>
    <section>
      <slot></slot>
    </section>
  </header>
</template>
<script>
  export default {
    props: {
      url: String,
      tags: String,
      title: String
    },
    computed: {
      tagList () {
        return this.tags.split(',');
      },
      titleSplit () {
        return this.title.split(' ');
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .page-head {
    background-color: #f0eceb;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    height: 100vmin;
    margin-bottom: $section-break;
    min-height: 200px;
    overflow: hidden;
  }
  .headline {
    margin-bottom: 3rem;
    text-align: center;
  }
  .title {
    margin: 16px 70px 0.4em;

    span {
      display: inline-block;
      margin: 0 3px;
    }
  }
  .meta {
    margin-bottom: 0;
    opacity: 0.8;
  }
  .meta-tags {
    display: block;
    font-family: $font_head;
    font-size: 0.8em;
    list-style-type: none;
    margin: 0 -1.5rem;
    padding: 0;
    position: relative;
  }
  li {
    display: inline-block;
    margin: 0 1.5rem;
  }
  .btn {
    font-size: 0.8em;
    padding: 1rem 3rem 0.7rem;
    margin-top: 2rem;
    @include btn-gradient(1px, #3dade9, #bf2fcb);
  }

  @include bp(md) {
    .page-head {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
      grid-auto-rows: minmax(100px, auto);
    }
    .headline {
      margin-bottom: 0;
    }
    .title {
      margin-top: 0;
    }
  }

  @include bp(sm) {
    .page-head {
      height: 50vmin;
    }
    .title {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
</style>
