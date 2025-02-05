import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Calendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your backend API endpoint
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const hours = [
        '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
        '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const currentDay = dayjs().day();
    const todayDate = dayjs().format('ddd, MMM D');

    return (
        <div className="flex flex-col h-screen  ">
            {/* Top Section */}
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold">Today</h1>
                    <div className="ml-4 bg-white text-[#204349] px-4 py-2 rounded">
                        {todayDate}
                    </div>
                </div>
              
            </div>

            {/* Days of the Week */}
            <div className="flex border-b border-gray-300">
                {daysOfWeek.map((day, index) => (
                    <div key={day} className={`flex-1 p-2 text-center ${index === currentDay ? 'bg-gray-200' : ''}`}>
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex flex-grow ">
                <div className="w-1/6 p-4 border-r border-gray-300">
                    {hours.map(hour => (
                        <div key={hour} className="h-16 text-sm text-gray-500 flex items-center justify-end pr-2">
                            {hour}
                        </div>
                    ))}
                </div>
                <div className="w-5/6 p-4">
                    {hours.map(hour => (
                        <div key={hour} className="relative h-16 border-b border-gray-300">
                            {events.map(event => (
                                event.time.startsWith(hour.split(' ')[0]) && (
                                    <div key={event.title} className="absolute top-1 left-1 right-1 bg-[#204349] text-white p-2 rounded shadow-md hover:bg-[#204349] transition duration-150">
                                        {event.title}
                                    </div>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Calendar;
