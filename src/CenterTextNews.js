/**
 * displays text in the center of the news section
 * @param {*} props 
 */

//import './TopNavigation.css';
import TopNavigation from './TopNavigation'
import FeatureImage from './FeatureImage'
import Footer from './Footer'

function CenterTextNews(props){
    return (
        <>
        <TopNavigation />
        <FeatureImage />
        <div className="col-lg-12">
        <h2 className="h2 text-center mt-5" style={{textDecoration: "underline", color:"red"}}>Our News Service</h2>
        <p className="text-center" style={{fontSize:"20px"}}>Top 100 Television News. Best of Rotten Tomatoes.</p>
        <p className="text-center" style={{fontSize:"20px"}}>Movies with 40 or more critic reviews vie for their place in history at Rotten Tomatoes.</p>
        <p className="text-center" style={{fontSize:"20px"}}>Eligible movies are ...</p>
        </div>
        <Footer />
        </>
        
        
    )
}

export default CenterTextNews;