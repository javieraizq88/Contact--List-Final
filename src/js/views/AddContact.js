import React from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" name="full_name" className="form-control" placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" name="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Agenda</label>
						<input type="text" name="agenda_slug" className="form-control" placeholder="Enter agenda" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" name="phone" className="form-control" placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" name="text" className="form-control" placeholder="Enter address" />
					</div>
					<button type="button" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
