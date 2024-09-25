import React, { useEffect, useState } from 'react';
import { Card, Spinner, Row, Col } from 'react-bootstrap';


const Live = () => {
  // Dummy channel data
  const dummyChannels = [
    { id: 1, title: " Adipurush Controversy LIVE Updates",src:"https://www.youtube.com/embed/ubdDKgOPIXA?si=RdusSmUfeECzSF5R" },
    { id: 2, title: "ONKAR NEWS LIVE Updates",src:"https://www.youtube.com/embed/cDGIkKtI_S0?si=5sTpkyKXtl7wqybe" },
    { id: 3, title: "LIVE | Delhi Liquor Policy Case",src:"https://www.youtube.com/embed/FgyuFaaahx0?si=FWHubIyftULWVomA" },
    { id: 4, title: "Controversy LIVE Updates",src:"https://www.youtube.com/embed/ubdDKgOPIXA?si=RdusSmUfeECzSF5R" },
  ];

  // State to track current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format the current date and time
  const formatDate = (date) => {
    return date.toLocaleString();
  };

  return (
    <div className="container mt-4">
      <h2>Live Channels</h2>
      <Row>
        {dummyChannels.map((channel) => (
          <Col md={4} key={channel.id}>
            <Card className="mb-4">
              <Card.Body>
                {/* Video Placeholder */}

                <iframe width="100%" height="100%" src={channel?.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                {/* Card Title */}
                <Card.Title className="mt-3">{channel.title}</Card.Title>
                {/* Current Date and Time */}
                <Card.Text>
                  Current Time: {formatDate(currentTime)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     
      
    </div>
  );
};

export default Live;
