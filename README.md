![Logo](https://github.com/fe-jan23-cyber-sapiens/products_catalog_api/assets/91826635/4fb84ec1-7619-4bff-a1e2-afb447be9db5)
---

<h3>Products Catalog API</h3>

<p>This is an API for a product catalog of an e-commerce website, built using Node.js, Express.js, neon.tech database, and Sequelize ORM. The API allows users to create, read, update, and delete products from the catalog, as well as search for products based on various criteria.</p>

<h2>Installation</h2>

<span>To install and run the API on your local machine, follow these steps:</span>

<ol>
  <li>Clone this repository: <code>git clone https://github.com/fe-jan23-cyber-sapiens/products_catalog_api.git</code></li>
  <li>Install dependencies: <code>npm install</code></li>
  <li>Create a <code>.env</code> file with your neon.tech database credentials and configuration.</li>
  <li>Start the API: <code>npm start</code></li>
</ol>

<h2>Usage</h2>

<span>Once the API is running, you can use it to interact with the product catalog. The API provides the following endpoints:</span>

<h3>Search endpoints</h3>

<ul>
  <li><code>GET /products/search?name=:name</code>: Searches for products by name.</li>
  <li><code>GET /products/search?description=:description</code>: Searches for products by description.</li>
  <li><code>GET /products/search?priceMin=:min&priceMax=:max</code>: Searches for products within a given price range.</li>
  <li><code>GET /products/search?category=:category</code>: Searches for products by category.</li>
</ul>

<h2>Contributing</h2>

<span>We welcome contributions from the community! To contribute, please follow these steps:</span>

<ol>
  <li>Fork this repository.</li>
  <li>Create a new branch: <code>git checkout -b my-feature-branch</code></li>
  <li>Make your changes and commit them: <code>git commit -am 'Add some feature'</code></li>
  <li>Push the changes to your fork: <code>it push origin my-feature-branch</code></li>
  <li>Create a pull request.</li>
</ol>

<span>Please make sure to include a detailed description of your changes and why they are necessary.</span>

<h2>License</h2>

<span>This project is licensed under the MIT License. See the LICENSE file for details.</span>
