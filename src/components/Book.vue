<template>
  <div class="container book-page">
    <div class="columns">
      <div class="column is-three-fifths title">
        <h1>{{ book.title }}</h1>
        <h3>{{ book.author }}</h3>
      </div>

      <div class="column votes">
        <span>Upvoted {{ book.upvotes }} {{ bookVotesLength ? 'time' : 'times' }}</span>
        <b-button :class="{active: !book.upvoted}" :disabled="book.upvoted">
          {{ upvoted(book.upvoted) }}
        </b-button>
      </div>
    </div>
    <div class="book-page-image">
      <img class="center" :src="book.cover">
    </div>

    <div class="book-page-synopsis">
      <h4>Synopsis</h4>
      <p>{{ book.synopsis }}</p>
    </div>

    <div class="book-page-rating">
      <p>Rating: {{ book.rating || 0 }} / 10</p>  
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
      return this.book.upvotes <= 1
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
      book: ''
    }
  },
  methods: {
    upvoted(flag) {
      return flag ? 'Upvoted' : 'Upvote'
    }
  },
  created() {
    const bookSlug = this.$router.currentRoute.params.slug;
    BookService.getBook(bookSlug)
      .then(result => this.book = result.data)
  },
}
</script>
