import { ICert } from '@types';
import './Cert.scss';

function Cert({ name, acquisitionDate, expirationDate }: ICert) {
	return (
		<div className="cert">
			<div>{name}</div>
			<div>{`${acquisitionDate} - ${expirationDate}`}</div>
		</div>
	);
}

export default Cert;
