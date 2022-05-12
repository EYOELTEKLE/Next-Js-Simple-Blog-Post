import Link from 'next/link'
import {useRouter} from 'next/router';
function index({articles}) {
    
  return (
    <div><p>This is article {articles.id}</p>
        <h1>{articles.title}</h1>
        <h2>{articles.body}</h2>
        <br/>
        <Link href='/'> Go Back</Link>
    </div>
  )
}

export const getServerSideProps = async (context) => 
{
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await data.json();
   
    return {
        props:{
            articles
        }
    }
} 

export default index