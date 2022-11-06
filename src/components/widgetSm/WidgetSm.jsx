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
            src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
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
            <span className="widgetSmUsername">Jamal</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
        </li>
     
        <li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          </li>
        </div>
        

             <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jamal</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
        </li>
     
        <li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          </li>
        </div>
        
              <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jamal</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
        </li>
     
        <li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          </li>
        </div>
        
              <div className="contributerprofilewidget">
       <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00_400x400.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jamal</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
        </li>
     
        <li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          </li>
        </div>
        
      </ul>
    </div>
  );
}
