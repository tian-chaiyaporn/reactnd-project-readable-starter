Plan:

Home Comp
  |-- CategoryList comp (props from mapPropsToState -> categories)
    |--- CategoryItem comp 1 (props -> categoryName, categoryDescription)
    |--- CategoryItem comp 2 ...
    |--- ...
  |-- PostList comp (props from mapPropsToState -> posts)
    |--- PostItem comp 1 (props -> postName, postDate)
    |--- PostItem comp 2
    |--- ...

Category Comp (props -> categoryName, categoryDescription)
  |-- PostList comp (props from mapPropsToState -> posts)
    |--- PostItem comp 1 (props -> postName, postDate)
    |--- PostItem comp 2
    |--- ...

Post Comp (props -> title, body, date)
  |-- CommentPostForm -> internal component state for textInbox and name
    |--- textInbox
    |--- name
    |--- submit -> dispatch action
  |-- CommentList comp (props from mapPropsToState -> comments)
    |--- Comment comp 1 (props -> body, date)
    |--- Comment comp 2
    |--- ...

state = {
  categories: [
    {
      name: 'react',
      path: 'react'
    },
    ...
  ],
  posts: [
    {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false
    },
    ...
  ],
  comments: [
    {
      id: '8tu4bsun805n8un48ve89',
      parentId: "8xf0y6ziyjabvozdd253nd",
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false
    },
    ...
  ]
}
