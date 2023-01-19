export interface xAxisData {
  dataKey: string;
  fill: string;
  name: string;
}

export interface chartData {
  month: string;
  forestry_logging_and_support: number | null;
  mining_quarrying_and_oil_and_gas_extraction: number | null;
  utilities: number | null;
  construction: number | null;
  manufacturing: number | null;
  trade: number | null;
  transportation_and_warehousing: number | null;
  information_and_cultural_industries: number | null;
  finance_and_insurance: number | null;
  real_estate_and_rental_and_leasing: number | null;
  professional_scientific_and_technical_services: number | null;
  management_of_companies_and_enterprises: number | null;
  administrative_and_support_waste_management_and_remediation: number | null;
  educational_services: number | null;
  health_care_and_social_assistance: number | null;
  arts_entertainment_and_recreation: number | null;
  accommodation_and_food_services: number | null;
  other_services_except_public_administration: number | null;
  public_administration: number | null;
}

interface options {
  label: string;
  value: string;
  selected: boolean;
}

export interface SelecterProps {
  options: options[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}
