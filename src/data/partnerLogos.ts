const encodeSegment = (segment: string) => encodeURIComponent(segment).replace(/%2F/g, "/");

const buildLogoPath = (folder: string, file: string) =>
  `/${encodeSegment(folder)}/${encodeSegment(file)}`;

const hiringFiles = [
  "Accenture.svg",
  "Adani Group.svg",
  "Aditya Birla Group.svg",
  "Ashok_Leyland.svg",
  "Backbase.svg",
  "Bosch.svg",
  "Capco.svg",
  "CitiBank.svg",
  "DXC Technology.svg",
  "EY.svg",
  "Gallagher.svg",
  "Giant Eagle.svg",
  "Grant Thornton.svg",
  "HPE.svg",
  "IBM.svg",
  "JCPenney.svg",
  "Kmart.svg",
  "KPMG.svg",
  "Kyndryl.svg",
  "Landmark Group.svg",
  "Lenovo.svg",
  "Levi’s.svg",
  "Lowe’s.svg",
  "Optum.svg",
  "Philips.svg",
  "Protiviti.svg",
  "Renault Nissan (RNTBCI).svg",
  "Schneider Electric.svg",
  "Siemens.svg",
  "Societe Generale.svg",
  "Stryker.svg",
  "Swiss Re.svg",
  "Wells Fargo.svg",
  "ZS Associate.svg",
];

const trustedFiles = [
  "Accenture.svg",
  "Amazon.svg",
  "Google.svg",
  "Honeywell.svg",
  "IBM.svg",
  "Infosys.svg",
  "Microsoft.svg",
  "Siemens.svg",
];

export const hiringPartnerLogos = hiringFiles.map((file) =>
  buildLogoPath("OUR HIRING PARTNERS", file),
);

export const trustedCompanyLogos = trustedFiles.map((file) =>
  buildLogoPath("TRUSTED BY LEADING COMAPNIES", file),
);

