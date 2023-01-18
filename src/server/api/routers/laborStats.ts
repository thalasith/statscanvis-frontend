import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const laborStatsRouter = createTRPCRouter({
  getEmploymentByGeography: publicProcedure
    .input(
      z.object({
        geography: z.string(),
        typeOfEmployee: z.string(),
        startDate: z.string(),
        endDate: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const whereQuery =
        input.typeOfEmployee === "All employees"
          ? {
              geography: input.geography,
              month: {
                gte: new Date(input.startDate),
                lte: new Date(input.endDate),
              },
            }
          : {
              geography: input.geography,
              type_of_employee: input.typeOfEmployee,
              month: {
                gte: new Date(input.startDate),
                lte: new Date(input.endDate),
              },
            };

      const data = await ctx.prisma.monthly_employment_by_industry.groupBy({
        by: ["month"],
        where: whereQuery,
        _sum: {
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
          administrative_and_support_waste_management_and_remediation: true,
          educational_services: true,
          health_care_and_social_assistance: true,
          arts_entertainment_and_recreation: true,
          accommodation_and_food_services: true,
          other_services_except_public_administration: true,
          public_administration: true,
        },
      });

      const outputData = data.map((item) => {
        return { ...item._sum, month: item.month.toISOString().slice(0, 7) };
      });

      return outputData;
    }),
  getWeeklySalaryByGeography: publicProcedure
    .input(
      z.object({
        geography: z.string(),
        typeOfEmployee: z.string(),
        startDate: z.string(),
        endDate: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const whereQuery =
        input.typeOfEmployee === "All employees"
          ? {
              geography: input.geography,
              month: {
                gte: new Date(input.startDate),
                lte: new Date(input.endDate),
              },
            }
          : {
              geography: input.geography,
              type_of_employee: input.typeOfEmployee,
              month: {
                gte: new Date(input.startDate),
                lte: new Date(input.endDate),
              },
            };

      const data = await ctx.prisma.monthly_weekly_earnings_by_industry.groupBy(
        {
          by: ["month"],
          where: whereQuery,
          _avg: {
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
            administrative_and_support_waste_management_and_remediation: true,
            educational_services: true,
            health_care_and_social_assistance: true,
            arts_entertainment_and_recreation: true,
            accommodation_and_food_services: true,
            other_services_except_public_administration: true,
            public_administration: true,
          },
        }
      );

      const outputData = data.map((item) => {
        return { ...item._avg, month: item.month.toISOString().slice(0, 7) };
      });

      return outputData;
    }),
});
