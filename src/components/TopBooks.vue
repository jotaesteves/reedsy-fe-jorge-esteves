<template>
  <div class="container top-books-page">
    <h1>Top Books</h1>
    <div class="container columns" v-for="book in bookData" :key="book.id">
      <section class="columns book-section">
        <div class="column">
          <h1 class="title">
            <a @click="$router.push({ name: 'Book', params: { slug: book.slug } })">
              {{book.title}}
            </a>
          </h1>
          <h3 class="author">{{book.author}}</h3>
          <p>{{book.synopsis}}</p>
          <div>{{book.upvotes}}</div>
        </div>
        <div class="column is-one-fifth">
          <img :src="book.cover" />
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
  created() {
    BookService.getBooks()
      .then(result => (this.bookData = result.data.books))
      .catch(error => HttpService.handleHttpError(this, error));
  }
};
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
