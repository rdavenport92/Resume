import { Award, Category, Cert } from '@components';
import { useCandidate } from '@providers';

export const CERT_AWARDS_NAME = 'Certifications and Awards';

function CertAwards() {
	const { certifications, awards } = useCandidate();

	return (
		<Category name={CERT_AWARDS_NAME}>
			<>
				{certifications.map((cert) => (
					<Cert key={cert.name} {...cert} />
				))}
				{awards.map((award) => (
					<Award key={`${award.presenter}${award.category}`} {...award} />
				))}
			</>
		</Category>
	);
}

export default CertAwards;
