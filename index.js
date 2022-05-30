const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = gql`
  type Book {
      title: String
      author: String
  }
  
  type Query {
      books: [Book]
  }
`;

const books = [
  {
    title: 'Book 1',
    author: 'Author',
  },
  {
    title: 'Book 2',
    author: 'Author'
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground()
  ]
})

server.listen(process.env.PORT || 3000).then(({ url }) => {
  console.log(`Ready at ${url}`)
})