<template>
<div class="container top-books-page">
  <div class="columns">
  <section class="column book-section" v-for="book in bookData" :key="book.id">
    <div>{{book.title}}</div>
    <div>{{book.author}}</div>
    <div>{{book.synopsys}}</div>
    <div>{{book.upvotes}}</div>
    <img :src="book.cover" />
  </section>
  </div>
</div>
</template>

<script>
import BookService from '../services/bookService';
import HttpService from '../services/httpService';

export default {
  name: 'TopBooks',
  props: {
    msg: String
  },
  data() {
    return {
      bookData: false
    }
  },
  created() {
    BookService.getBooks()
      .then(result => this.bookData = result.data.books)
      .catch(error => HttpService.handleHttpError(this, error))
  }
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
