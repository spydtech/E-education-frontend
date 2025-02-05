

import React, { useEffect } from 'react'
import { InlineWidget } from "react-calendly";
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const GoogleCalendar = () => {
    // const { auth } = useSelector(state => state)
    // const userName = auth.firstname
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className="App" style={{ padding: '20px' }}>
            <h1>Schedule a Meeting</h1>

            {/* Inline Widget Example */}
            <div style={{ marginBottom: '40px' }}>
                {/* <h2>Inline Widget</h2> */}
                <div style={{ height: '600px' }}>
                    <InlineWidget url="https://calendly.com/username" styles={{ height: '100%' }} />
                </div>
            </div>

            {/* Popup Widget Example */}
            {/* <div>
      <h2></h2>
      <PopupWidget
        url="https://calendly.com/your-username"
        rootElement={document.getElementById('root')}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div> */}
        </div>

    )
}

export default GoogleCalendar