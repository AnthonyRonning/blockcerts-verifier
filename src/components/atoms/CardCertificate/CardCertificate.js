import { html } from '@polymer/lit-element';
import CSS from './_components.card-css';
import '../../molecules/VerifyButton';

export default function CardCertificate ({
  hasCertificateDefinition,
  recipientName,
  certificateTitle,
  issuedOn,
  issueDate,
  issuerName,
  issuerLogo,
  recordLink,
  hideRecordLink,
  hideVerifyButton
}) {
  if (!hasCertificateDefinition) {
    return null;
  }

  const titleClass = [
    'buv-c-card__title',
    hideRecordLink ? 'buv-c-card__title--no-padding' : ''
  ].join(' ');

  return html`
    ${CSS}
    <section class='buv-c-card'>
      <div class='buv-c-card__img-wrapper'>
        <img src='${issuerLogo}' alt='${issuerName}' class='buv-c-card__img'/>
      </div>
      <div class='buv-c-card__title-wrapper'>
        <h1 class$=${titleClass}>${certificateTitle}</h1>
        <h2 class$='${titleClass}  buv-c-card__recipient'>${recipientName}</h2>
        <span class='buv-o-text-12'>Issued on <time datetime$='${issuedOn}'>${issueDate}</time> by ${issuerName}</span>
      </div>
      ${
  hideRecordLink
    ? ''
    : html`<a class='buv-o-text-12  buv-o-link  buv-c-card__record-link' href='${recordLink}' target='_blank'>
        <span class='buv-o-link__text--underline'>View Record</span>
    </a>`
}
    </section>
    ${
  hideVerifyButton
    ? ''
    : html`<buv-verify-button isHollow class='buv-c-card__verify-button'></buv-verify-button>`
}
    `;
}
