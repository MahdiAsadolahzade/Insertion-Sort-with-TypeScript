type EventTypes = {
    title: string;
    start: string; // in 'HH:MM' format
    end: string;   // in 'HH:MM' format
  };
  
  // Helper function to convert 'HH:MM' to minutes
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };
  
  // Insertion sort function to sort events by their start time
  const insertionSortEvents = (events: EventTypes[]): EventTypes[] => {
    for (let j = 1; j < events.length; j++) {
      const key = events[j];
      let i = j - 1;
  
      // Compare start times of events
      while (i >= 0 && timeToMinutes(events[i].start) > timeToMinutes(key.start)) {
        events[i + 1] = events[i];
        i = i - 1;
      }
      events[i + 1] = key;
    }
    return events;
  };
  
  // Function to check if events overlap
  const hasOverlap = (events: EventTypes[]): boolean => {
    // Sort events by start time
    const sortedEvents = insertionSortEvents(events);
  
    // Iterate through sorted events to detect overlap
    for (let i = 1; i < sortedEvents.length; i++) {
      const prevEvent = sortedEvents[i - 1];
      const currEvent = sortedEvents[i];
  
      // If the current event starts before the previous event ends, there's an overlap
      if (timeToMinutes(currEvent.start) < timeToMinutes(prevEvent.end)) {
        console.log(`Overlap found between "${prevEvent.title}" and "${currEvent.title}"`);
        return true;
      }
    }
  
    return false;
  };
  
  // Example event list
  const events: EventTypes[] = [
    { title: "Meeting with Bob", start: "10:00", end: "11:30" },
    { title: "Lunch Break", start: "12:00", end: "13:00" },
    { title: "Project Review", start: "11:00", end: "12:30" },
    { title: "Call with Client", start: "09:00", end: "10:30" },
  ];
  
  // Check if events overlap
  const result = hasOverlap(events);
  console.log("Is there an overlap?:", result);
  