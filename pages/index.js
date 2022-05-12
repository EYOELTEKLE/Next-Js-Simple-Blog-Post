import Head from 'next/head'
import Articles_list from '../components/Articles_list';
export default function Home({data}) {
  
  return (

    <div >
        <Head>
          <title>Next js Project</title>
        </Head>
        <Articles_list data={data}></Articles_list>
     
    </div>
  )
}
export const getStaticProps = async () => 
{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const data = await response.json();

  return{
    props:
    {
      data
    }
  }
}
