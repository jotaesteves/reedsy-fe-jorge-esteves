<template>
  <div class="book-page">
    <div class="columns">
      <div class="column title">
        <h1>{{ bookData.title }}</h1>
        <h3>{{ bookData.author }}</h3>
      </div>

      <div class="column votes">
        Upvoted {{ bookData.upvotes }} {{ bookVotesLength ? 'time' : 'times' }}
        <b-button></b-button>
      </div>
    </div>

    <div class="book-page-image">
      <img class="center" :src="bookData.cover">
    </div>

    <div class="book-page-synopsis">
      <h4>Synopsis</h4>
      <p>{{ bookData.synopsis }}</p>
    </div>

    <div class="book-page-rating">
      <p>Rating: {{ bookData.rating || 0 }} / 10</p>  
    </div>
  </div>
</template>

<script>
import BookService from '../services/bookService';

export default {
  name: 'Book',
  props: {
    slug: String
  },
  computed: {
    bookVotesLength() {
      return this.bookData.upvotes <= 1
    }
  },
  data() {
    return {
      bookVotes: 883,
      bookTitle: 'the Odyssey',
      bookSubTitle: 'the Odyssey',
      synopsisText: '',
      ratingValue: 8.5,
      bookSlug: '',
      bookData: ''
    }
  },
  methods: {
  },
  created() {
    const bookSlug = this.$router.currentRoute.params.slug;
    BookService.getBook(bookSlug)
      .then(result => this.bookData = result.data)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
