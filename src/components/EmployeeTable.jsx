import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HStack, VStack } from '@chakra-ui/react';

const initialNewsData = [
    {
      employeeCode: 'E001',
      employeeName: 'John Doe',
      department: 'HR',
      joiningDate: '2021-02-15',
      gender:'Male',
      mobileNo: '1234567890'
    },
    {
      employeeCode: 'E002',
      employeeName: 'Jane Smith',
      department: 'Finance',
      joiningDate: '2020-08-10',
      gender: 'female',
      mobileNo: '0987654321'
    },
    {
      employeeCode: 'E003',
      employeeName: 'Emily Johnson',
      department: 'Engineering',
      joiningDate: '2019-04-21',
      gender: 'Female',
      mobileNo: '1122334455'
    },
    {
      employeeCode: 'E004',
      employeeName: 'Michael Brown',
      department: 'Marketing',
      joiningDate: '2022-01-05',
      gender: 'Male',
      mobileNo: '2233445566'
    },
    {
      employeeCode: 'E005',
      employeeName: 'Sarah Davis',
      department: 'IT',
      joiningDate: '2021-07-30',
      gender: 'Female',
      mobileNo: '3344556677'
    },
    {
      employeeCode: 'E006',
      employeeName: 'David Wilson',
      department: 'Sales',
      joiningDate: '2020-12-01',
      gender: 'Male',
      mobileNo: '4455667788'
    },
    {
      employeeCode: 'E007',
      employeeName: 'Sophia Lee',
      department: 'Operations',
      joiningDate: '2019-09-15',
      gender: 'Female',
      mobileNo: '5566778899'
    },
    {
      employeeCode: 'E008',
      employeeName: 'Daniel Miller',
      department: 'HR',
      joiningDate: '2018-05-10',
      gender: 'Male',
      mobileNo: '6677889900'
    },
    {
      employeeCode: 'E009',
      employeeName: 'Olivia Taylor',
      department: 'Finance',
      joiningDate: '2022-03-20',
      gender: 'Female',
      mobileNo: '7788990011'
    },
    {
      employeeCode: 'E010',
      employeeName: 'James Anderson',
      department: 'Engineering',
      joiningDate: '2021-11-25',
      gender: 'Male',
      mobileNo: '8899001122'
    },
    {
      employeeCode: 'E011',
      employeeName: 'Isabella White',
      department: 'Marketing',
      joiningDate: '2020-06-14',
      gender: 'Female',
      mobileNo: '9900112233'
    },
    {
      employeeCode: 'E012',
      employeeName: 'Ethan Harris',
      department: 'IT',
      joiningDate: '2019-10-05',
      gender: 'Male',
      mobileNo: '1011121314'
    }
  ];
  
  

const EmployeeTable = () => {
  const [newsData, setNewsData] = useState(initialNewsData);
  const [searchTitle, setSearchTitle] = useState('');
  const [sortDateOrder, setSortDateOrder] = useState(null); // null, 'asc', 'desc'
  const [searchDate, setSearchDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [newsPerPage] = useState(5);

  const email= sessionStorage.getItem("auth");
  // Handle search by title
  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

//   const getforadmin= async()=>{
//     const res= await axios.post("http://localhost:5000/0auth/getalldata",{})
//     setNewsData(res?.data.reverse());

//   }

    

//   useEffect(()=>{
//     const getdata = async()=>{
//       const res = await axios.post("http://localhost:5000/0auth/getdata",{email})
//       console.log(res?.data);
//       setNewsData(res?.data);
//     }
//     if(email=="admin@gmail.com")
//       {
//         getforadmin();
//       }
//       else{
//       getdata();

//     }
//   },[email])

  // Handle sorting by date
  const handleSortByDate = () => {
    const order = sortDateOrder === 'asc' ? 'desc' : 'asc';
    const sortedNews = [...newsData].sort((a, b) => {
      return order === 'asc'
        ? new Date(a.joiningDate) - new Date(b.joiningDate)
        : new Date(b.joiningDate) - new Date(a.joiningDate);
    });
    setSortDateOrder(order);
    setNewsData(sortedNews);
  };

  // Handle deleting news
  const handleDeleteNews = (id) => {
    const updatedNews = newsData.filter((news) => news.employeeCode !== id);
    setNewsData(updatedNews);
  };

  // Filter by title and exact date
  const filteredNews = newsData?.filter((news) => {
    const matchesTitle = news?.employeeName?.toLowerCase().includes(searchTitle?.toLowerCase());
    const matchesDate = searchDate ? news?.joiningDate == searchDate : true;
    return matchesTitle && matchesDate;
  });

  // Handle Pagination
  const displayedNews = filteredNews?.slice(currentPage * newsPerPage, (currentPage + 1) * newsPerPage);
  const pageCount = Math.ceil(filteredNews?.length / newsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  
  return (
    <div className="container mt-4" style={{paddingTop:'5vw'}}>
      <h3>Employees Datasheet</h3>

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
            <th>Employee Code</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th>Gender</th>
            <th>Mobile No</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayedNews.length > 0 ? (
            displayedNews?.map((empdata) => (
              <tr >
            <td>{empdata?.employeeCode}</td>
            <td>{empdata?.employeeName}</td>
            <td>{empdata?.department}</td>
            <td>{empdata?.joiningDate}</td>
            <td>{empdata?.gender}</td>
            <td>{empdata?.mobileNo}</td>
            <td>
                <VStack>
                    <Link to={'/payroll'}>
                    <Button>See PayRoll</Button>
                    </Link>
                </VStack>
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

export default EmployeeTable;
