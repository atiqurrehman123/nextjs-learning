import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";
type Props = {
    params:{
        searchTerm:string
    }
}
// generating meta data
export async function generateMetaData({params:{searchTerm}}:Props){
    const wikiData:Promise<SearchResult>=getWikiResults(searchTerm);
    const data=await wikiData;
    const displayTerm=searchTerm.replaceAll("%20",' ');


    if(!data?.query?.pages){
        return {
            title:`${displayTerm} Not Found`
        }
    }

    return {
        title:displayTerm,
        description:`${displayTerm} Results`

    }
}
export default async function page({params:{searchTerm}}: Props) {
    const wikiData:Promise<SearchResult>=getWikiResults(searchTerm);
    const data=await wikiData
    const results:Result[] | undefined =data?.query?.pages;
    console.log(results,"resulta")
    const content =(
        <main>
            {results?
            Object.values(results).map(result=>{
                return <Item key={result.pageid} result={result}/>;
            })
        :
        <h2>{`${searchTerm} Not Found`}</h2>
        }
        </main>
    )
  return (
    <div>{content}</div>
  )
}
