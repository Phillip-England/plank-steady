
type Props = {
	_id: string
	name: string
	number: string
}

export const Location = ({_id, name, number}: Props) => {
	return (
		<li className="flex flex-row rounded m-4 border-dashed border shadow">
			<a className="p-4 flex flex-col w-full" href={`/location/${_id}`}>
				<h3 className="text-sm">{name}</h3>
				<p className="text-sm">{number}</p>
			</a>
		</li>
	)
}