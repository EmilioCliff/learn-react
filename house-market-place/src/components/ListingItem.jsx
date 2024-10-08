import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import { ReactComponent as EditICon } from "../assets/svg/editIcon.svg";
import bathtubIcom from "../assets/svg/bathtubIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";

function ListingItem({ listining, id, onEdit, onDelete }) {
	return (
		<li className='categoryListing'>
			<Link
				to={`/category/${listining.type}/${id}`}
				className='categoryListingLink'
			>
				<img src={listining.imgUrls[0]} alt='' className='categoryListingImg' />
				<div className='categoryListingDetails'>
					<p className='categoryListingLocation'>{listining.location}</p>
					<p className='categoryListingName'>{listining.name}</p>
					<p className='categoryListingPrice'>
						{listining.offer
							? listining.discountedPrice
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
							: listining.regularPrice
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
						{listining.type === "rent" && " / month"}
					</p>
					<div className='categoryListingInfoDiv'>
						<img src={bedIcon} alt='' />
						<p className='catehoryListingInfoText'>
							{listining.bedrooms > 1
								? `${listining.bedrooms} Bedrooms`
								: "1 Bedroom"}
						</p>
						<img src={bathtubIcom} alt='' />
						<p className='catehoryListingInfoText'>
							{listining.bathrooms > 1
								? `${listining.bathrooms} Bathrooms`
								: "1 Bathrooms"}
						</p>
					</div>
				</div>
			</Link>

			{onDelete && (
				<DeleteIcon
					className='removeIcon'
					fill='rgb(231, 76, 60'
					onClick={() => onDelete(listining.id, listining.name)}
				/>
			)}

			{onEdit && <EditICon className='editIcon' onClick={() => onEdit(id)} />}
		</li>
	);
}

export default ListingItem;
