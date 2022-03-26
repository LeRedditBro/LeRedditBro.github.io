import { useEffect, useRef } from "react"

export default function LinkedInBadge() {

	const ref = useRef<any>();

	useEffect(() => {
		ref.current.contentDocument.body.innerHTML = `
		<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="tomer-atar-9881b215b" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://il.linkedin.com/in/tomer-atar-9881b215b?trk=profile-badge">Tomer Atar</a></div>
		`

		const sc = document.createElement('script')
		sc.src = "https://platform.linkedin.com/badges/js/profile.js";
		sc.type = "text/javascript"
		ref.current.contentDocument.head.append(sc);

		const st = document.createElement('style')
		st.innerHTML = `
		body > div > a {
			display: none;
		}
		`;
		ref.current.contentDocument.head.append(st);

	}, [])


	return (
		<iframe ref={ref} style={{ height: '241px', width: '281px', border: 'none' }} />
	)
}
