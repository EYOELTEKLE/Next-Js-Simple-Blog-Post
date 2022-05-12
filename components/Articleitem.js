import Link from "next/dist/client/link";
import articlestyles from '../styles/article.module.css'

function Articleitem({data}) {
  return (
   <Link href='/articles/[id]' as={`articles/${data.id}`}>
       <a className={articlestyles.card}><h3>{data.title} &rarr;</h3>
       <p>{data.body}</p>
       </a>
   </Link>
  )
}

export default Articleitem