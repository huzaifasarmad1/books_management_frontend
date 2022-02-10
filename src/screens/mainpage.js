
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Navigator from '../routes/homestack';

function students_data(first_name,last_name) {
  return { first_name, last_name};
}
function books_data(book_name,author,borrowed_by,borrow_date,return_date) {
  return { book_name,author,borrowed_by,borrow_date,return_date};
}

const getMoviesFromApiAsync = async () => {
  try {
    console.log('in try')
    let response = await fetch(
      `http://localhost:4000/books/getbooks`);
  console.log(response)
  } catch (error) {
    console.log('catching');
    console.error(error);
  }
};
getMoviesFromApiAsync();
const students = [
  students_data('one', 'two'),
  students_data('three', 'four'),
];
const books = [
  books_data('Ali', 'Ahmad','empty','empty','empty'),
  books_data('Ali', 'Ahmad','empty','empty','empty'),
];

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1 className='heading'>Students</h1>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="center">Last Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow
            key={student.first_name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            {student.first_name}
            </TableCell>
             <TableCell align="center">{student.last_name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
{/* books */}
<h1 className='heading'>Books</h1>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Book Name</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Borrowed By</TableCell>
          <TableCell>Borrow Date</TableCell>
          <TableCell>Return Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {books.map((book) => (
          <TableRow
            key={book.book_name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            {book.book_name}
            </TableCell>
            <TableCell>{book.author}</TableCell>
             <TableCell>{book.borrowed_by}</TableCell>
             <TableCell>{book.borrow_date}</TableCell>
             <TableCell>{book.return_date}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </header>
  </div>
  );
}

export default App;
