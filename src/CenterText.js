/**
 * displays text in the center
 * @param {*} props 
 */

//import './TopNavigation.css';

function CenterText(props){
    return (
        <div className="col-lg-12">
        <h2 className="h2 text-center mt-5" style={{textDecoration: "underline", color:"red"}}>Our Home Service</h2>
        <p className="text-center" style={{fontSize:"20px"}}>Top 100 Television Movies. Best of Rotten Tomatoes.</p>
        <p className="text-center" style={{fontSize:"20px"}}>Movies with 40 or more critic reviews vie for their place in history at Rotten Tomatoes.</p>
        <p className="text-center" style={{fontSize:"20px"}}>Eligible movies are ...</p>
        </div>
        
        
        
    )
}

export default CenterText;