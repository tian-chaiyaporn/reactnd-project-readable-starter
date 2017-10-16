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

ToDo:
- hook up to backend api to get all existing state

- create form with internal form state for posting new posts
- hook up to backend api to add new post
- create vote button and display on each post
- hook up to backend api to vote on post
- create delete button for post
- hook up to backend api to disable post
- create button to edit post with its own edit component
- hook up to backend api to edit post

- create form with internal form state for posting comments
- hook up to backend api to add new comment
- create vote button and display on each comments
- hook up to backend api to vote on comments
- create delete button for comments
- hook up to backend api to disable comments
- create button to edit comment with its own edit component
- hook up to backend api to edit comments

- identify each component that needs states to update
- hook up action dispatch to get data to store with each navigation for latest updates
