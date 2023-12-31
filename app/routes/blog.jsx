import {useLoaderData} from '@remix-run/react'
import {getPosts} from '~/models/posts.server'
import ListadoPost from '~/components/listado-posts'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <ListadoPost 
        posts = {posts}

      />
    </main>
  )
}

export default Blog