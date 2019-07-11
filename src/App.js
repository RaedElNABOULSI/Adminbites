import React, { Component } from 'react';

import './App.css';
import { Button, ButtonGroup, Dropdown, DropdownButton, NavDropdown,Card,Accordion } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			data_blogs:[],
			data_orders:[],
			data_testimonials:[],
			toggleProducts: false,
			toggleCategories:false,
			toggleOrders:false,
			toggleBlogs:false,
			toggleTestimonials:false
		};
	}

	//---------------------------------------------Fetch from database ---------------------------------------------------
	async componentDidMount() {
		try {
			// FETCH FROM Products TABLE
			const response_products_read = await fetch('http://localhost:3001/products/read');
			const products_read = await response_products_read.json();
			await this.setState({ data: products_read.DATA });
			await console.log('my Products are:', this.state.data);

//Fetch from BLogs table
const response_blogs_read = await fetch('http://localhost:3001/blogs/read');
const blogs_read = await response_blogs_read.json();
await this.setState({ data_blogs: blogs_read.DATA });
await console.log('my blogs are:', this.state.data_blogs);


//Fetch from orders table
const response_orders_read = await fetch('http://localhost:3001/orders/read');
const orders_read = await response_orders_read.json();
await this.setState({ data_orders: orders_read.DATA });
await console.log('my blogs are:', this.state.data_orders);

//Fetch from testimonials table
const response_testimonials_read = await fetch('http://localhost:3001/testimonials/read');
const testimonials_read = await response_testimonials_read.json();
await this.setState({ data_testimonials: testimonials_read.DATA });
await console.log('my blogs are:', this.state.data_testimonials);





		} catch (err) {
			console.log(err);
		}
	}

	//---------------------------------------------Fetch from database ---------------------------------------------------

	//---------------------------------function---------------------------------------------------
	myProducts = () => {
		this.setState({ toggleProducts: !this.state.toggleProducts });
	};

	myCategories = () => {
		this.setState({ toggleCategories: !this.state.toggleCategories });
	};

	myOrders = () => {
		this.setState({ toggleOrders: !this.state.toggleOrders });
	};

	myBlogs = () => {
		this.setState({ toggleBlogs: !this.state.toggleBlogs });
	};

	myTestimonials = () => {
		this.setState({ toggleTestimonials: !this.state.toggleTestimonials });
	};

	// addProduct = () => {
	// 	this.setState({ toggleTestimonials: !this.state.toggleTestimonials });
	// };

	//---------------------------------function---------------------------------------------------

	render() {
		console.log('render is ' + this.state.data);
		return (
			<div className="App">

				<div className="panel">
					<h1>Admin Panel </h1>

					<Dropdown className="dropdowna">
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Admin Lama
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Acount Settings</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<ButtonGroup vertical className="buttongrouplist">
						<Button className="productsbutton" onClick={this.myProducts}>
							Products
						</Button>
						<Button className="categoriesbutton" onClick={this.myCategories}>
							Categories
						</Button>

						<Button className="ordersbutton" onClick={this.myOrders}>
							Orders
						</Button>

						<Button className="blogsbutton" onClick={this.myBlogs}>
							Blogs
						</Button>

						<Button className="Testimonialsbutton" onClick={this.myTestimonials}>
							Testimonials
						</Button>
					</ButtonGroup>
				</div>

				{/* ----------------------------------------Products mapping -------------------------------------------- */}

				{this.state.toggleProducts && (
					<div id="panelresult">
						<div className="containerproductscolumn">
							<h2> Products Id</h2>
							<h2> Name</h2>
							<h2> Price</h2>
							<h2>Best Seller</h2>
							<h2>Category Id</h2>
							<h2>Category Name</h2>
						</div>
						{this.state.data.map(item => (
							<div className="containershowproducts">
							
								<h3>		{item.products_id}</h3>
								<h3>	{item.products_name}</h3>
								<h3>	{item.products_price}</h3>
								<h3>	{item.products_bestseller}</h3>
								<h3>	{item.categories_id}</h3>
								<h3>	{item.categories_name} </h3>
								
							</div>
						))}


						<Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Add Product
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
	  <label>Product Name</label>
	  <input className="inputproductname"></input>
	  <br/>
	  <label>Product Price</label>
	  <input className="inputproductprice"></input>
	  <br/>
	  <label>Product Bestseller</label>
	  <input className="inputproductbestseller"></input>
	  <br/>
	  <label>Product Category Id</label>
	  <input className="inputproductcatid"></input>
	  <br/>
	  <label>Product Category Name</label>
	  <input className="inputproductcatname"></input>
	  <br/>
	  <button type="submit" onClick={this.addProduct}>Submit</button>
	  </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
     Edit Product
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


					</div>
				)}

{/* ----------------------------------------Products mapping -------------------------------------------- */}


{/* --------------------------------------------Categories mapping----------------------------------------------- */}
				{this.state.toggleCategories && (
					<div id="panelresult">
						<div className="containercategoriescolumn">
							
							<h2>Category Id</h2>
							<h2>Category Name</h2>
						</div>
						{this.state.data.map(item => (
							<div className="containershowcategories">
							
							
								<h3>	{item.categories_id}</h3>
								<h3>	{item.categories_name} </h3>
								
							</div>
						))}
					</div>
					
				)}
	{/* ---- - ---  --- --------------------------------------------Categories mapping----------------------------------------------- */}
{/* 
------------------------------------Orders mapping----------------------------------------- */}

{this.state.toggleOrders && (
					<div id="panelresult">
						<div className="containerorderscolumn">
							<h2> Orders Id</h2>
							<h2> Name</h2>
							<h2> Address</h2>
							<h2>Phone Number</h2>
							<h2>Email</h2>
							
						</div>
						{this.state.data_orders.map(item => (
							<div className="containershoworders">
							
								<h3>		{item.orders_id}</h3>
								<h3>	{item.name}</h3>
								<h3>	{item.address}</h3>
								<h3>	{item.phone_numbe}</h3>
								<h3>	{item.email}</h3>
								
								
							</div>
						))}
					</div>
				)}



{/* ------------------------------------Orders mapping----------------------------------------- */}

{/* -------------------------------------------BLogs mapping -------------------------------- */}

{/* {this.state.toggleBlogs && (
					<div id="panelresult">
						<div className="containerBlogscolumn">
							<h2> Blog Id</h2>
							<h2> Blog Title</h2>
							<h2> Blog Date</h2>
							<h2>Blog Author</h2>
							<h2>Blog Content</h2>
							<h2>Images Link Id</h2>
						</div>
						{this.state.data.map(item => (
							<div className="containershowblogs">
							
								<h3>		{item.blogs_id}</h3>
								<h3>	{item.blogs_title}</h3>
								<h3>	{item.blogs_date}</h3>
								<h3>	{item.blogs_author}</h3>
								<h3>	{item.blogs_content}</h3>
								<h3>	{item.images_link_id} </h3>
								
							</div>
						))}
					</div>
				)} */}



				{this.state.toggleBlogs && (
					<div id="panelresult">
						<div className="containerblogscolumn">

						<h2> Blog Id</h2>
							<h2> Blog Title</h2>
							<h2> Blog Date</h2>
							<h2>Blog Author</h2>
							<h2>Blog Content</h2>
							<h2>Images Link Id</h2>

						</div>
						{this.state.data_blogs.map(item => (
							<div className="containershowblogs">
							
							<h3>		{item.blogs_id}</h3>
								<h3>	{item.blogs_title}</h3>
								<h3>	{item.blogs_date}</h3>
								<h3>	{item.blogs_author}</h3>
								<h3>	{item.blogs_content}</h3>
								<h3>	{item.images_link_id} </h3>
								
							</div>
						))}
					</div>
					
				)}





{/* -------------------------------------------BLogs mapping -------------------------------- */}


{/* --------------------------------------------Testimonials mapping----------------------------------------------- */}
{this.state.toggleTestimonials && (
					<div id="panelresult">
						<div className="containertestimonialscolumn">
							
							<h2>Testimonial Id</h2>
							<h2>Testimonial Name</h2>
							<h2>Testimonial Content</h2>
<h2>Testimonial Date</h2>
<h2>Testimonial Position</h2>
<h2>Testimonial Company</h2>
<h2>Testimonial Image</h2>
						</div>
						{this.state.data_testimonials.map(item => (
							<div className="containershowtestimonials">
							
							
								<h3>	{item.testimonials_id}</h3>
								<h3>	{item.testimonials_name} </h3>
								<h3>	{item.testimonials_content}</h3>
								<h3>	{item.testimonials_date} </h3>
								<h3>	{item.testimonials_position}</h3>
								<h3>	{item.testimonials_company} </h3>
								<h3>	{item.testimonials_position} </h3>
								
							</div>
						))}
					</div>
					
				)}
	{/* ---- - ---  --- --------------------------------------------Testimonials mapping----------------------------------------------- */}


			</div>
		);
	}
}

export default App;
