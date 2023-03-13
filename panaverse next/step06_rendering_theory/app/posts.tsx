import Post from "./post"
async function getData() {
   let req = await fetch("https://jsonplaceholder.typicode.com/posts")
   return req.json()
}



export default async function Posts() {
  let posts = await getData()
  
   return (
    <div>
      {posts.map((p) => {
     return   <Post key={p.id} data={p} />
      })}
      sas
    </div>
  )
}
