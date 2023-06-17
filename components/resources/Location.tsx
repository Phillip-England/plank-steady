
type Props = {
	_id: string
	name: string
	number: string
}

export const Location = ({_id, name, number}: Props) => {
	return (
		<li className="flex mb-2 flex-row rounded border border-gray-200 border-2">
			<a className="p-2 flex flex-row w-full" href={`/location/${_id}`}>
				<h3 className="text-xs">{name.toUpperCase().slice(0,32)}</h3>
				{/* <p className="text-xs">#{number}</p> */}
			</a>
		</li>
	)
}