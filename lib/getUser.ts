import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

export const getUser = async (token: string | undefined) => {
	const res = await fetch('http://localhost:8080/user', {
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
	return res
}
