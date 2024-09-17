import React, { useState } from 'react';
import { Form, Button, Badge, Col, Row, Image } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NewsPostForm = () => {
  const [heading, setHeading] = useState('');
  const [points, setPoints] = useState([]);
  const [currentPoint, setCurrentPoint] = useState('');
  const [details, setDetails] = useState('');
  const [images, setImages] = useState([]);
  const [newsDate, setNewsDate] = useState(new Date());

  const handleAddPoint = () => {
    if (currentPoint) {
      setPoints([...points, currentPoint]);
      setCurrentPoint('');
    }
  };

  const handleDeletePoint = (index) => {
    const newPoints = points.filter((_, i) => i !== index);
    setPoints(newPoints);
  };

  const handleBannerChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
    });
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('points', points.join(', '));
    formData.append('details', details);
    formData.append('newsDate', newsDate);
    images.forEach((image, i) => formData.append(`image_${i}`, image));
    console.log({
      heading,
      points,
      details,
      images,
      newsDate,
    });
  };

  return (<div style={{ margin: '5vw' }}>
<div style={{padding:'20px'}}>
    <Link to={'/mynews'}><Button variant="primary">See News Posted and stats</Button></Link>
</div>
  
    <Form onSubmit={handleSubmit} className="p-4" >
      <h3>Create News Post</h3>

      {/* News Heading */}
      <Form.Group controlId="newsHeading" className="mb-3">
        <Form.Label>News Heading</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter news heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
      </Form.Group>

      {/* News One-word Points */}
      <Form.Group controlId="newsPoints" className="mb-3">
        <Form.Label>News # tags</Form.Label>
        <Row>
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Enter a point and hit Enter"
              value={currentPoint}
              onChange={(e) => setCurrentPoint(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddPoint())}
            />
          </Col>
          <Col xs={3}>
            <Button variant="primary" onClick={handleAddPoint}>Add</Button>
          </Col>
        </Row>
        <div className="mt-2">
          {points.map((point, index) => (
            <Badge key={index} pill bg="primary" className="me-2">
              {point}{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => handleDeletePoint(index)}
              >
                x
              </span>
            </Badge>
          ))}
        </div>
      </Form.Group>

      {/* News Details (Rich Text Editor) */}
      <Form.Group controlId="newsDetails" className="mb-3">
        <Form.Label>News Details</Form.Label>
        <ReactQuill value={details} onChange={setDetails} />
      </Form.Group>

      {/* News Banner */}
      <Form.Group controlId="newsBanner" className="mb-3">
        <Form.Label>Select News Banner</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          multiple
          onChange={handleBannerChange}
        />
        <Row className="mt-3">
          {images.map((image, index) => (
            <Col key={index} xs={6} md={4}>
              <div className="position-relative">
                <Image
                  src={image}
                  rounded
                  
                  fluid
                  alt={`preview-${index}`}
                  className="mb-2"
                />
                <Button
                  variant="danger"
                  size="sm"
                  className="position-absolute top-0 end-0"
                  onClick={() => handleRemoveImage(index)}
                >
                  x
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Form.Group>

      {/* News Date and Time */}
      <Form.Group controlId="newsDate" className="mb-3">
        <Form.Label>News Date and Time</Form.Label>
        <DatePicker
          selected={newsDate}
          onChange={(date) => setNewsDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="form-control"
        />
      </Form.Group>

      <Button variant="success" type="submit">Submit News</Button>
    </Form>
    </div>
  );
};

export default NewsPostForm;
