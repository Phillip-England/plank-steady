
export const getLocations = async (token: string | undefined) => {
	const res = await fetch('http://localhost:8080/locations', {
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
	return res
}