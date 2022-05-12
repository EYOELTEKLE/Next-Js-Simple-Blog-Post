import articlestyle from '../styles/article.module.css'
import Articleitem from './Articleitem'
function Articles_list({data}) {
  return (
    <div className={articlestyle.grid}>
   {data.map(items => 
          (
            <Articleitem data={items}></Articleitem>
          ))}

    </div>
  )
}

export default Articles_list