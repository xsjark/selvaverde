
 import { Calendar, momentLocalizer } from 'react-big-calendar'
 import moment from 'moment'
 import React, { useState, useEffect }  from "react";
 import 'react-big-calendar/lib/css/react-big-calendar.css';
 import { useStaticQuery, graphql } from 'gatsby' 
 import {Buffer} from 'buffer';
 
 /* global Snipcart:false */
 
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
   
 
   const [date, setDate] = useState(null)
 
 
   const add_date = async ({start,end,resourceId}) => {
     var persons = snipcartProductObject;
     
     // Find if the array contains an object by comparing the property value
     if (persons.some(e => e.startDate.getDate() === start.getDate())) {
         alert("Sorry, we're booked out on this day.");
     } 
     else if ( new Date(new Date().setDate(new Date().getDate()+1)).toISOString() >= start.toISOString()){
       alert("You can't book something in past.");
     }
     else
     {
         alert("You have selected " + start + " reserve your spot and check out!");
         setDate((start.toISOString()))
     }
   }
 
   useEffect(() => {
     if (window.Snipcart) {
       Snipcart.events.on("item.added", () => {
         console.log("Item added")
       })
     }
   });
 
   const [eventTitle, setEventTitle] = useState("")
   const [eventStart, setEventStart] = useState(null)
  
   useEffect(() => {
     if (window.Snipcart) {
       Snipcart.events.on("cart.confirmed", () => {
         setEventTitle(props.id)
         setEventStart(date)
         
       })
     }
   });
 
   const [snipcartProductObject, setSnipcartProductObject] = useState([]);
   useEffect(() => {
     async function loadData() {
         const response = await fetch('https://app.snipcart.com/api/orders/', {
             headers: {
                 'Authorization': `Basic ${btoa('ST_NjE4OTlmODgtZmVhNy00NjAwLWE0MzAtZWI4NzRiZjhjYmEwNjM3NzMzNzMyMjcyMDkxMjQx')}`,
                 'Accept': 'application/json'
             }})
 
         const posts = await response.json();
         setSnipcartProductObject(reformatEventObject(posts.items).flat());
     }
 
     loadData();
 }, []);
 
//  const reformatEventObject =  (eventlist) => {
//    return eventlist.map(function(eventlist) {
//      // create a new object to store full name.
//      var newObj = {};
//      newObj["title"] = (eventlist.items[0].name); // !! ONLY CHECKS ONE ITEM IN ORDER
//      newObj["startDate"] = new Date(eventlist.items[0].description);
//      newObj["endDate"] = new Date(eventlist.items[0].description);
//      newObj["allDay"] = true;
 
//      // return our new object.
//      return newObj;
//    });
//  };

 const reformatEventObject =  (eventlist) => {
  return eventlist.map(function(eventlist) {
    // create a new object to store full name.
    let newarr=[]
    var newObj = {};
    eventlist.items.forEach(item => {
      newObj["title"] = (item.name); // !! CHECKS ALL BUT NO CLICK
      newObj["startDate"] = new Date(item.description);
      newObj["endDate"] = new Date(item.description);
      newObj["allDay"] = true;

      // return our new object.
      newarr.push(newObj)
    }) 
    return newarr
  });
};
   return(
   <div>
     <Calendar
       localizer={localizer}
       startAccessor="startDate"
       endAccessor="endDate"
       style={{ height: 500 }}
       events={snipcartProductObject}
       onSelectSlot={add_date}   
       selectable='ignoreEvents'
       drilldownView={false}
     />
       {
         date !==  null ?
         <div className="max-w-2xl mx-auto flex justify-center">
         <div className="mb-6 text-lg">
         <button class="snipcart-add-item bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
           data-item-id={props.id}
           data-item-price={props.price}
           data-item-url={"https://selvaverdetours.gatsbyjs.io/posts/" + props.slug} 
           data-item-description={date}
           data-item-image={props.coverImage?.gatsbyImageData}
           data-item-name={props.id}
           data-item-min-quantity={2}
           style={{marginTop: 70}}
         >
           Reserve your spot for ${props.price} on {new Date(date).toDateString()}
         </button>
         </div>
       </div>
       : date ==  null && 
         <div className="max-w-2xl mx-auto flex justify-center">
         <div className="mb-6 text-lg">
         <button disabled class=" disabled:opacity-50 snipcart-add-item bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
           data-item-id={props.id}
           data-item-price={props.price}
           data-item-description={date}
           data-item-image={props.coverImage?.gatsbyImageData}
           data-item-name={props.id}
           data-item-min-quantity={2}
           style={{marginTop: 70}}
         >
           Select a date for your tour
         </button>
         </div>
       </div>
       }
   </div>
 )}
 
 export default MyCalendar
 
  


  