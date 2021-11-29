import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React, { useState, useEffect }  from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useStaticQuery, graphql } from 'gatsby' 
import events from './events';
import  Snipcart  from "gatsby-plugin-snipcartv3";

const localizer = momentLocalizer(moment)

const MyCalendar = props => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    calendarEvent {
      id
    }
    allCalendarEvent {
      edges {
        node {
          id
          description
          start {
            dateTime(formatString: "")
          }
          end {
            dateTime(formatString: "")
          }
        }
      }
    }
  }
  
  `)
  var reformatPersons = function(eventlist) {
    return eventlist.map(function(eventlist) {
      // create a new object to store full name.
      var newObj = {};
      newObj["title"] = eventlist.node.description;
      newObj["startDate"] = new Date(eventlist.node.start.dateTime);
      newObj["endDate"] = new Date(eventlist.node.end.dateTime);
      newObj["allDay"] = true;
  
      // return our new object.
      return newObj;
    });
  };

  const [date, setDate] = useState(null)

  const add_date = async ({start,end,resourceId}) => {
    var persons = reformatPersons(data.allCalendarEvent.edges);

    // Find if the array contains an object by comparing the property value
    if (persons.some(e => e.startDate.toISOString() == start.toISOString())) {
        alert("Sorry, we're booked out on this day.");
    } 
    else if ( new Date().toISOString() >= start.toISOString()){
      alert("You can't book something in past.");
    }
    else
    {
        alert("You have selected " + start + " reserve your spot and check out!");
        setDate((start.toISOString()))
    }
  }


  return(
  <div>
    <Calendar
      localizer={localizer}
      startAccessor="startDate"
      endAccessor="endDate"
      style={{ height: 500 }}
      events={reformatPersons(data.allCalendarEvent.edges)}
      onSelectSlot={add_date}   
      selectable={true}
      drilldownView={false}
    />

      {
        date ==  null && 
        <div className="max-w-2xl mx-auto flex justify-center">
        <div className="mb-6 text-lg">
        <button class="snipcart-add-item bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          data-item-id={props.id}
          data-item-price={props.price}
          data-item-url={"https://selvaverdetours.gatsbyjs.io/posts/" + props.slug + "/#"} 
          data-item-description={date}
          data-item-image={props.coverImage?.gatsbyImageData}
          data-item-name={props.id}
          data-item-min-quantity={2}
          style={{marginTop: 70}}
        >
          Reserve your spot for ${props.price} on {date}
        </button>
        </div>
      </div>
      }
  </div>
)}

export default MyCalendar

