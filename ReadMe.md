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
   npm install express axios
   ```

3. **Fetch Initial Data**:
   ```sh
   node script/initializeData.js
   ```

4. **Start the Server**:
   ```sh
   node server.js
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
   `GET http://localhost:3000/api/data?filterKey=name&filterValue=Adeel%20Solangi`

2. **Sort Data**:  
   `GET http://localhost:3000/api/data?sortKey=version&sortOrder=asc`

3. **Filter and Sort Data**:  
   `GET http://localhost:3000/api/data?sortKey=id&sortOrder=asc&filterKey=version`

##### Example Response:
```json
[
  {
        "name": "Adeel Solangi",
        "language": "Sindhi",
        "id": "V59OF92YF627HFY0",
        "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
        "version": 6.1
    },
    {
        "name": "Afzal Ghaffar",
        "language": "Sindhi",
        "id": "ENTOCR13RSCLZ6KU",
        "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
        "version": 1.88
    }
]
```

### Error Handling
- **400 Bad Request**: Invalid query parameters.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: Server-side error.

## Postman Documentation
For a detailed guide on how to use the API, including examples and additional functionalities, refer to our comprehensive [Postman Documentation](https://www.postman.com/abhinav14379/workspace/rocketium/collection/37350472-9e81d823-d9ca-4964-89fe-a513c00cec53?action=share&creator=37350472).

## Contributing
We welcome contributions! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Special thanks to the team at Rocketium for the inspiration and initial setup.
