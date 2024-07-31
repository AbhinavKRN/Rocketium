Here's an enhanced version of your README file with additional details to make it more informative and attractive, including a link to the Postman documentation:

---

# Node.js JSON Data Server

Welcome to the **Node.js JSON Data Server**! This project leverages Express to create a robust and scalable server that serves, filters, and sorts dummy JSON data. Whether you're looking to practice API integration, or test data manipulation techniques, this server is a perfect starting point.

## Getting Started

### Prerequisites
To get started, ensure you have the following installed on your machine:
- **Node.js** (v12.x or higher)
- **npm** (v6.x or higher)

### Installation and Running
1. **Clone the Repository**:
   ```sh
   git clone git@github.com:AbhinavKRN/Rocketium.git
   cd node-dummy-json-project
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Fetch Initial Data**:
   ```sh
   node scripts/initializeData.js
   ```

4. **Start the Server**:
   ```sh
   node src/server.js
   ```
   The server will be accessible at: [http://localhost:3000](http://localhost:3000)

## API Documentation

### Base URL
For local development, the base URL is: `http://localhost:3000/api`

### Endpoints

#### GET `/data`
Retrieve all the dummy JSON data with optional filtering and sorting capabilities.

##### Parameters:
- **`filterKey`**: (optional) The field to filter by (e.g., `type`)
- **`filterValue`**: (optional) The value to match for filtering (e.g., `fiction`)
- **`sortKey`**: (optional) The field to sort by (e.g., `price`)
- **`sortOrder`**: (optional) The order of sorting, `asc` for ascending or `desc` for descending

##### Example Requests:
1. **Filter Data**:  
   `GET http://localhost:3000/api/data?filterKey=name&filterValue=Adeel Solangi`

2. **Sort Data**:  
   `GET http://localhost:3000/api/data?sortKey=version&sortOrder=asc`

3. **Filter and Sort Data**:  
   `GET http://localhost:3000/api/data?filterKey=type&filterValue=fiction&sortKey=price&sortOrder=desc`

##### Example Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "type": "fiction",
    "price": 10.99,
    "version": 2
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "type": "non-fiction",
    "price": 8.99,
    "version": 1
  }
]
```

### Error Handling
- **400 Bad Request**: Invalid query parameters.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: Server-side error.

## Postman Documentation
For a detailed guide on how to use the API, including examples and additional functionalities, refer to our comprehensive [Postman Documentation](https://www.postman.com/abhinav14379/workspace/rocketium/collection/37350472-2dd09e54-3dce-419b-8a4f-d91cadae2406?action=share&creator=37350472).

## Contributing
We welcome contributions! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Special thanks to the team at Rocketium for the inspiration and initial setup.
