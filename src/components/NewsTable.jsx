import React, { useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialNewsData = [
    { id: 1, title: 'First News', likes: 50, dislikes: 5, views: 1000, postedDate: new Date('2024-09-15') },
    { id: 2, title: 'Second News', likes: 20, dislikes: 2, views: 500, postedDate: new Date('2024-09-10') },
    { id: 3, title: 'Third News', likes: 100, dislikes: 10, views: 2000, postedDate: new Date('2024-09-01') },
    { id: 4, title: 'Fourth News', likes: 70, dislikes: 8, views: 1500, postedDate: new Date('2024-09-12') },
    { id: 5, title: 'Fifth News', likes: 30, dislikes: 1, views: 600, postedDate: new Date('2024-08-28') },
    { id: 6, title: 'Sixth News', likes: 120, dislikes: 15, views: 2200, postedDate: new Date('2024-09-05') },
    { id: 7, title: 'Seventh News', likes: 80, dislikes: 7, views: 1750, postedDate: new Date('2024-09-18') },
    { id: 8, title: 'Eighth News', likes: 90, dislikes: 10, views: 1800, postedDate: new Date('2024-09-03') },
    { id: 9, title: 'Ninth News', likes: 110, dislikes: 9, views: 2100, postedDate: new Date('2024-09-06') },
    { id: 10, title: 'Tenth News', likes: 60, dislikes: 4, views: 1400, postedDate: new Date('2024-09-09') },
    { id: 11, title: 'Eleventh News', likes: 45, dislikes: 5, views: 1200, postedDate: new Date('2024-09-04') },
    { id: 12, title: 'Twelfth News', likes: 25, dislikes: 3, views: 800, postedDate: new Date('2024-09-02') },
    { id: 13, title: 'Thirteenth News', likes: 130, dislikes: 12, views: 2400, postedDate: new Date('2024-08-30') },
    { id: 14, title: 'Fourteenth News', likes: 75, dislikes: 6, views: 1600, postedDate: new Date('2024-08-25') },
    { id: 15, title: 'Fifteenth News', likes: 55, dislikes: 5, views: 1300, postedDate: new Date('2024-09-11') },
    { id: 16, title: 'Sixteenth News', likes: 40, dislikes: 4, views: 1150, postedDate: new Date('2024-09-07') },
    { id: 17, title: 'Seventeenth News', likes: 95, dislikes: 10, views: 1900, postedDate: new Date('2024-09-14') },
    { id: 18, title: 'Eighteenth News', likes: 85, dislikes: 8, views: 1700, postedDate: new Date('2024-09-08') },
    { id: 19, title: 'Nineteenth News', likes: 105, dislikes: 12, views: 2100, postedDate: new Date('2024-09-13') },
    { id: 20, title: 'Twentieth News', likes: 65, dislikes: 6, views: 1450, postedDate: new Date('2024-08-27') },
    { id: 21, title: 'Twenty-First News', likes: 35, dislikes: 4, views: 900, postedDate: new Date('2024-08-29') },
    { id: 22, title: 'Twenty-Second News', likes: 125, dislikes: 14, views: 2500, postedDate: new Date('2024-08-26') }
  ];
  

const NewsTable = () => {
  const [newsData, setNewsData] = useState(initialNewsData);
  const [searchTitle, setSearchTitle] = useState('');
  const [sortDateOrder, setSortDateOrder] = useState(null); // null, 'asc', 'desc'
  const [searchDate, setSearchDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [newsPerPage] = useState(5);

  // Handle search by title
  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  // Handle sorting by date
  const handleSortByDate = () => {
    const order = sortDateOrder === 'asc' ? 'desc' : 'asc';
    const sortedNews = [...newsData].sort((a, b) => {
      return order === 'asc'
        ? new Date(a.postedDate) - new Date(b.postedDate)
        : new Date(b.postedDate) - new Date(a.postedDate);
    });
    setSortDateOrder(order);
    setNewsData(sortedNews);
  };

  // Handle deleting news
  const handleDeleteNews = (id) => {
    const updatedNews = newsData.filter((news) => news.id !== id);
    setNewsData(updatedNews);
  };

  // Filter by title and exact date
  const filteredNews = newsData.filter((news) => {
    const matchesTitle = news.title.toLowerCase().includes(searchTitle.toLowerCase());
    const matchesDate = searchDate ? news.postedDate.toDateString() === searchDate.toDateString() : true;
    return matchesTitle && matchesDate;
  });

  // Handle Pagination
  const displayedNews = filteredNews.slice(currentPage * newsPerPage, (currentPage + 1) * newsPerPage);
  const pageCount = Math.ceil(filteredNews.length / newsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="container mt-4" style={{padding:'5vw'}}>
      <h3>News Posted</h3>

      {/* Search and Filters */}
      <Row className="mb-3">
        <Col xs={6}>
          <Form.Control
            type="text"
            placeholder="Search by news title"
            value={searchTitle}
            onChange={handleSearchTitle}
          />
        </Col>
        <Col xs={4}>
          <DatePicker
            selected={searchDate}
            onChange={(date) => setSearchDate(date)}
            placeholderText="Search by exact date"
            className="form-control"
          />
        </Col>
        <Col xs={2}>
          <Button variant="outline-secondary" onClick={handleSortByDate}>
            Sort by Date {sortDateOrder === 'asc' ? '▲' : '▼'}
          </Button>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>News Title</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Views</th>
            <th>Posted Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedNews.length > 0 ? (
            displayedNews.map((news) => (
              <tr key={news.id}>
                <td>{news.title}</td>
                <td>{news.likes}</td>
                <td>{news.dislikes}</td>
                <td>{news.views}</td>
                <td>{news.postedDate.toDateString()}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteNews(news.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No news found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default NewsTable;
