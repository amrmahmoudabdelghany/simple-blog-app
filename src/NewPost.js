import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {

  const {
    handleSubmit , 
    postTitle , 
    setPostTitle , 
    postBody , 
    setPostBody 
} = useContext(DataContext) ; 

  return (
    <main className = "NewPost">
      <h2>New Post</h2>
      <form className = "newPostForm" onSubmit={handleSubmit} > 
         <label htmlFor='postTitle' >Title :  </label> 
         <input 
           type = "text" 
           id = "postTitle" 
           value = {postTitle}
           onChange={(e)=>setPostTitle(e.target.value)} 
           required
         /> 
         <label htmlFor='postBody' >Body : </label>
         <textarea 
            id = "postBody" 
            required
            value = {postBody} 
            onChange={(e)=>setPostBody(e.target.value)} 
        />

        <button type = "submit" >Submit </button>
         </form>
    </main>
  )
}

export default NewPost
