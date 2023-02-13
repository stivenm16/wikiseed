const fullUri = (endpoint: string) =>
  `http://localhost:5173/wikiseed/login/${endpoint}`;

export default {
  //User
  createAccount: fullUri("user/register"),
  login: fullUri("user/login"),
  requestPassword: fullUri("user/request-password"),
  resetPassword: fullUri("user/reset-password"),
  validateCode: fullUri("user/validate-code"),
  disableAccount: fullUri("user/suspend-account"),
  getFollowers: (userId?: string) => fullUri(`follow/getMyfollowers/${userId}`),
  uploadUserImage: (userId: string) => fullUri(`user/upload-photo/${userId}`),

  // //Books
  // getBooks: fullUri("book/all-books"),
  // createBook: fullUri("book/create-book"),
  // getBookP: fullUri("book/getBooksByCategory/libros_programacion"),
  // getBooksByAuthor: (authorId?: string) =>
  //   fullUri(`book/getBooksByAuthor/${authorId}`),
  // getDraftsByAuthor: (authorId?: string) =>
  //   fullUri(`book/save-in-draft/${authorId}`),
  // uploadCover: (bookId?: string) => fullUri(`book/upload-cover/${bookId}`),
  // addChapter: (bookId?: string) => fullUri(`book/add-chapter/${bookId}`),
  // updateBook: fullUri(`book/update`),
  // deleteBook: (bookId?: string) => fullUri(`book/delete-book/${bookId}`),
  // getChapter: (bookId: string, chapterId: number) =>
  //   fullUri(`book/get-chapter/${bookId}/${chapterId}`),

  //Categories
  getCategories: fullUri("categorie/all-categories"),

  //Profile Endpoints
  getUser: (userId?: string) => fullUri(`user/my-profile/${userId}`),
  editUserById: () => fullUri("user/update"),
  getUserExternal: (userId: string, followerId: string) =>
    fullUri(`follow/by-id/${userId}/${followerId}`),

  //Validate Tokens
  validateToken: fullUri("user/validate-token"),
  refreshToken: fullUri("user/refresh-token"),

  //Alias
  verifiedAlias: (alias: string) => fullUri(`user/validate-alias/${alias}`),
};
