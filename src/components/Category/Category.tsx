import './Category.scss';

interface CategoryProps {
	name?: string;
	children: JSX.Element;
}

function Category({ name, children }: CategoryProps) {
	return (
		<div>
			{name ? (
				<>
					<h3>{name}</h3>
					<hr />
				</>
			) : null}
			<div className="content">{children}</div>
		</div>
	);
}

export default Category;
