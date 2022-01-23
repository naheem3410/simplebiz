/**
 * displays feature image
 * @param {*} props 
 */

import './FeatureImage.css';

function FeatureImage(props){
    return (
        <>
        <div className="">
        <div className=""><img className="feature-image" src="img/feature-image.jfif" alt="image"/></div>
        </div>
        <div className="flow-over p-3 d-xs-none">
        <div>
        <p style={{color:"#D84747"}} className="h4 text-center">MENS MOVIE LIBRARY</p>
        <p style={{color:"white",fontWeight:"bold",fontSize:"50px",opacity:1}} className="h4 text-center">Best Movies</p>
        <p style={{color:"white"}} className="h4 text-center">OF ALL TIME</p>
        </div>
        </div>
        </>
        
        
    )
}

export default FeatureImage;