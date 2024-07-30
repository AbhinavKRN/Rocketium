# Node.js JSON Data Server

This project uses Express to create a Node.js server that serves, filters, and sorts dummy JSON data.

## Getting Started

### Prerequisites
- Node.js (v12.x or higher)
- npm (v6.x or higher)

### Installation and Running
1. Clone the project: `git clone <your-repository-url> && cd <your-repository-folder>`
2. Install dependencies: `npm install`
3. Fetch initial data: `node scripts/initializeData.js`
4. Start the server: `node src/server.js`
   - Access at: `http://localhost:3000`

## API Documentation

### GET `/data`
Returns JSON data with optional filtering and sorting.

#### Parameters:
- `filterKey`: Field to filter by (e.g., `type`)
- `filterValue`: Matching value for filtering (e.g., `fiction`)
- `sortKey`: Field to sort by (e.g., `price`)
- `sortOrder`: Order of sorting, `asc` or `desc`

Example: 

`1.To filter data: http://localhost:3000/api/data?filterKey=name&filterValue=John`

`2.To sort data: http://localhost:3000/api/data?sortKey=age&sortOrder=asc`
