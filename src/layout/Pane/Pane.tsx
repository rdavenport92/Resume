import './Pane.scss';

interface PaneProps {
	children: JSX.Element;
	style: React.CSSProperties;
}

function Pane({ children, style }: PaneProps) {
	return (
		<div className="pane" style={style}>
			{children}
		</div>
	);
}

export default Pane;
