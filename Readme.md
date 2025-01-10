# Product Store Backend

## API Endpoints

### Get All Products
- **URL:** `/api/products`
- **Method:** `GET`
- **Status Codes:**
  - `200 OK` - Successfully retrieved products
  - `500 Internal Server Error` - Server error
- **Response:**
  ```json
  {
    "success": true,
    "data": [
      {
        "_id": "product_id",
        "name": "Product Name",
        "price": 100,
        "image": "image_url",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  }
  ```

### Create a Product
- **URL:** `/api/products`
- **Method:** `POST`
- **Status Codes:**
  - `201 Created` - Successfully created product
  - `400 Bad Request` - Missing required fields
  - `500 Internal Server Error` - Server error
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "image": "image_url"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "data": {
      "_id": "product_id",
      "name": "Product Name",
      "price": 100,
      "image": "image_url",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

### Update a Product
- **URL:** `/api/products/:id`
- **Method:** `PUT`
- **Status Codes:**
  - `200 OK` - Successfully updated product
  - `404 Not Found` - Product not found or invalid product id
  - `500 Internal Server Error` - Server error
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "price": 150,
    "image": "updated_image_url"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "data": {
      "_id": "product_id",
      "name": "Updated Product Name",
      "price": 150,
      "image": "updated_image_url",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

### Delete a Product
- **URL:** `/api/products/:id`
- **Method:** `DELETE`
- **Status Codes:**
  - `200 OK` - Successfully deleted product
  - `404 Not Found` - Product not found or invalid product id
  - `500 Internal Server Error` - Server error
- **Response:**
  ```json
  {
    "success": true,
    "message": "Product deleted successfully"
  }
  ```
