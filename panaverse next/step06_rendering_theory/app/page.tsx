import Posts from './posts'

export default function Home() {
  
  return (
    <div>
      <h1>Blog</h1>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  )
}
