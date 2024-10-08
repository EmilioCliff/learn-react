import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function Contact() {
	const [message, setMessage] = useState("");
	const [landlord, setLandlord] = useState(null);
	const [searchParams, setSearchParama] = useSearchParams();

	const params = useParams();

	useEffect(() => {
		const getLandlord = async () => {
			const docRef = doc(db, "users", params.landlordId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setLandlord(docSnap.data());
			} else {
				toast.error("Could not get landlord data");
			}
		};

		getLandlord();
	}, [params.landlordId]);

	const onChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div className='pageContainer'>
			<header>
				<p className='pageHeader'>Contact Landlord</p>
			</header>

			{landlord !== null && (
				<main>
					<div className='contactLandlord'>
						<p className='landlordName'>Contact {landlord?.name}</p>
					</div>

					<form className='message'>
						<div className='messageDiv'>
							<label className='messageLabel' htmlFor='message'></label>
							<textarea
								name='message'
								id='message'
								cols='30'
								rows='10'
								className='textarea'
								value={message}
								onChange={onChange}
							></textarea>
						</div>

						<a
							href={`mailto:${landlord.email}?Subject=${searchParams.get(
								"listingName"
							)}&body=${message}`}
						>
							<button className='primaryButton' type='button'>
								Send Message
							</button>
						</a>
					</form>
				</main>
			)}
		</div>
	);
}

export default Contact;
