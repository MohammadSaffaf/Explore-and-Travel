const Header = () => {
    return ( 
        <article className="articleHeader">
            <div className="explore">
            <img  id="img1"src="./assets/img/2.png" alt=""/>
            <img  id="img2" src="./assets/img/2.png" alt=""/>
            <img  id="img3" src="./assets/img/plus.png" alt=""/>
<h1>Explore and Travel</h1>
<p>Holiday finder</p>
<p>_____</p>
<div className="select-div">
<select  name="travel1">
    <option value="Location">Location</option>
    <option value="Activity">Activity</option>
    <option value="Grade">Grade</option>
    <option value="Date">Date</option>
  </select>
  <select  name="travel1">
    <option value="Location">Activity</option>
    <option value="Activity">Location</option>
    <option value="Grade">Grade</option>
    <option value="Date">Date</option>
  </select>
  <select  name="travel1">
    <option value="Location">Grade</option>
    <option value="Activity">Activity</option>
    <option value="Grade">Location</option>
    <option value="Date">Date</option>
  </select>
  <select  name="travel1">
    <option value="Location">Date</option>
    <option value="Activity">Activity</option>
    <option value="Grade">Grade</option>
    <option value="Date">Location</option>
  </select>

  </div>
  <button className="register">Explore</button>
            </div>
            <div className="explore-img">

            </div>
        </article>
     );
}
 
export default Header;