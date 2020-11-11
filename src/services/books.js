import client from 'providers/fetchClient'

export const getCategories = () => client.get('/categories')

export const getBooks = () => client.get('/books')

export const getBookById = id => client.get(`/books/${id}`)

export const filterBooksByCategory = category => client.get(`/books?category=${category}`)
