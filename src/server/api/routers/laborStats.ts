import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const laborStatsRouter = createTRPCRouter({
  getEmploymentByGeography: publicProcedure
    .input(z.object({ geography: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.monthly_employment_by_industry.findMany({
        where: {
          geography: input.geography,
        },
        select: {
          geography: true,
          type_of_employee: true,
          month: true,
          forestry_logging_and_support: true,
          mining_quarrying_and_oil_and_gas_extraction: true,
          utilities: true,
          construction: true,
          manufacturing: true,
          trade: true,
          transportation_and_warehousing: true,
          information_and_cultural_industries: true,
          finance_and_insurance: true,
          real_estate_and_rental_and_leasing: true,
          professional_scientific_and_technical_services: true,
          management_of_companies_and_enterprises: true,
          administrative_and_support_waste_management_and_remediation_: true,
          educational_services: true,
          health_care_and_social_assistance: true,
          arts_entertainment_and_recreation: true,
          accommodation_and_food_services: true,
          other_services_except_public_administration: true,
          public_administration: true,
        },
      });
    }),
});
