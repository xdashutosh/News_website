import React, { useEffect, useState } from 'react';
import { Card, Spinner, Row, Col } from 'react-bootstrap';

const Live = () => {
  // Dummy channel data
  const dummyChannels = [
    { id: 1, title: "Channel 1", isLive: false },
    { id: 2, title: "Channel 2", isLive: false },
    { id: 3, title: "Channel 3", isLive: false },
    { id: 4, title: "Channel 4", isLive: false },
    { id: 5, title: "Channel 5", isLive: false },
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
                <div style={{ height: '200px', backgroundColor: '#000', position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff',
                    }}
                  >
                    {/* Buffering Indicator */}
                    <Spinner animation="border" role="status" />
                    <p>Buffering...</p>
                  </div>
                </div>
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
