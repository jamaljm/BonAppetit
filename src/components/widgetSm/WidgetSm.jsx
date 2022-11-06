import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Contritbuter</span>
      <ul className="widgetSmList">
        <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://avatars.githubusercontent.com/u/34004150?v=4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jamal</span>
          </div>
        </li>
     
        <li>
          <button className="widgetSmButton">
            Point : 234
          </button>
          </li>
                  </div>

             <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sam</span>
          </div>
        </li>
     
        <li>
            <button className="widgetSmButton">
            Point : 134
          </button>
          </li>
        </div>
        

             <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nazim</span>
          </div>
        </li>
     
        <li>
            <button className="widgetSmButton">
            Point : 134
          </button>
          </li>
        </div>
        
              <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/originals/d9/c2/66/d9c266d772be275b3debdda807239dca.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">jozeph</span>
          </div>
        </li>
     
        <li>
             <button className="widgetSmButton">
            Point : 101
          </button>
          </li>
        </div>
        
              <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Allen</span>
          </div>
        </li>
     
        <li>
         <button className="widgetSmButton">
            Point : 34
          </button>
          </li>
        </div>
        
      </ul>
    </div>
  );
}
