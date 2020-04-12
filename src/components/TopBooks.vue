<template>
  <div class="container top-books-page">
    <h1 class="page-title">Top Books</h1>
    <div v-for="(book, i) in bookData" :key="book.id">
      <section class="book-section columns" style="position: relative;">
        <div class="column">
          <h1 class="title">
            <a @click="$router.push({ name: 'Book', params: { slug: book.slug } })">
              {{i+1}}. {{book.title}}
            </a>
            <span class="rating"> ({{book.rating}}/10) </span>
          </h1>

          <h3 class="author">{{book.author}}</h3>
          <p class="synopsis">{{synopsis(book.synopsis)}}</p>

          <div class="upvotes">
            <b-button :class="{active: !book.upvoted}" :disabled="book.upvoted">
              {{ upvoted(book.upvoted) }}
            </b-button>
          <span class="upvotes-count">Upvoted {{book.upvotes}} times</span>
          </div>
        </div>
        <div class="column is-one-fifth">
          <a @click="$router.push({ name: 'Book', params: { slug: book.slug } })">
            <img class="center" :src="book.cover" />
          </a>
        </div>
      </section>
    </div>
    
  </div>
</template>

<script>
import BookService from "../services/bookService";
import HttpService from "../services/httpService";

export default {
  name: "TopBooks",
  props: {
    msg: String
  },
  data() {
    return {
      bookData: false
    };
  },
  methods: {
    synopsis(text) {
      if(!text) return ''
      return text.length > 200 ? text.substring(0, 200) + '...' : text;           
    },
    upvoted(flag) {
      return flag ? 'Upvoted' : 'Upvote'
    }
  },
  created() {
    const that = this;
    BookService.getBooks()
      .then((result) => {
        result.data.books.map((book) => {
          console.log(that)
          console.log(book)
          book.synopsisShort = that.synopsis(book.synopsis)
          console.log(book)
        })
        this.bookData = result.data.books
        })
      .catch(error => HttpService.handleHttpError(this, error));
  }
};
</script>

<style scoped>
</style>
