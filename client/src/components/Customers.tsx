import React, { useState, useEffect } from 'react';

export interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/customers', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((customers) => {
				setCustomers(customers);
			});
	}, []);

	return (
		<div>
			<h2>Customers</h2>
			<ul>
				{customers.map((customer) => (
					<li key={customer.id}>
						{customer.firstName} {customer.lastName}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Customers;
