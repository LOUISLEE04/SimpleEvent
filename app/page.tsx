"use client";
import Image from "next/image";
import DataTable from "./DataTable/DataTable";
import { EventDetails } from "./types/EventDetails.types";
import { cn } from "@/lib/utils"
import Head from 'next/head';
import { getEventList } from "./services/eventlist.service";
import { useState, useEffect } from 'react';
//use effect runs everytime when there is a change/input on the website
 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
//importing the files

/*export default function Home() {

  //so right here we add constant event data (type is eventdetails)
  const eventData: EventDetails[] = [
    { name: "Event 1" },
    { name: "Event 2" },
    { name: "Event 3" },
    { name: "Event 4" },
    { name: "Event 5" },
  ];
  return (
    //there was initially an error after this line when we used
    //like <datatable ...></datatable>
    //solved with putting another <> as per suggested by VSC, tbc
    //something about needing at least one parent
    <><DataTable data={eventData}></DataTable>

    </>
  );
}*/

//tbc, this line requires more study to double confirm

//here we create the eventlist for the card
  
const eventlist = [
  {
    title: "Meeting in The Foundry",
    description: "163 Great George St"
    
  }
]

interface Event {
  title: string;
  description: string;
}

//declaring the type of the card as CardProps
type CardProps = React.ComponentProps<typeof Card>

export default function CardDemo({className, ...props}: CardProps){

  //needed [] in usestate as it is initial value
  const[events, setEvents] = useState([]);
  
  //the idea is use effect then got the async function
  useEffect(() => {
    //here is the actual code to run
    async function fetchEvents(){
      console.log("Use Effect working")

      
      const response = await fetch('the api link');
      const data = await response.json();
      setEvents(data.body.result);
      //have to use data.body as it is how api returns it
      
    }

    fetchEvents();
    console.log(events);
    //optional return function
  }, []/*this is dependency array*/);




  return (
    <Card className={cn("w-[1800px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Event List</CardTitle>
        <CardDescription>Here are the upcoming events</CardDescription>
      </CardHeader>
      {/*set the gap as 4*/}
      <CardContent className="grid gap-10">
         {/* div is used to group and structure large stuff,
           span is used to apply stuff to smaller portion of text 
           mb is margin bottom is 4, bigger space
           1fr is 1 part of the available space
           grid-cols is grid item size and location*/}
        {events.map((event, index) => (
            <div key={index} className="mb-15 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              
              {/* This is for the button, h is height of circle, w is width
                  translate-y-1 is to allign it correctly (TBC why it couldnt be alligned at first place)
                  rounded-full is for perfect circle
                  bg-sky is the color of the circle */}
              {/* The reason translate is to allign, not allign properly at first due to baseline,
                  the circle doesnt have text but the text have text, so the baseline is different
                   -1 means down 0.25rem, every 1 is 0.25rem, to move up is -y--1, not "+"*/}


              <span className="h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{"Temp Title"}</p>
                <p className="text-sm text-muted-foreground">
                  {/* if the event description is not a string, 
                  but an object, then we can use stringify to 
                  convert it into a string then display 
                  
                  True when typeof is object, then we do stringify, : separates
                  for the else condition*/}

                  {typeof event.description === "object"
                    ? JSON.stringify(event.description)
                    : event.description}
                </p>
              </div>
            </div>
          ))
        }
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

/*This is 22*/

