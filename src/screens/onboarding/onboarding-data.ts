import { type animations } from "@assets";

export type OnboardingPageItem = {
  title: string;
  description: string;
  animation: keyof typeof animations;
  index: number;
  total: number;
  isLast: boolean;
};

type OnboardingPageItemWithoutMeta = Omit<
  OnboardingPageItem,
  "index" | "total" | "isLast"
>;

const page1: OnboardingPageItemWithoutMeta = {
  title: "Receita na hora",
  description:
    "Encontre receitas deliciosas com os ingredientes que você já tem em casa.",
  animation: "lunchbox",
};

const page2: OnboardingPageItemWithoutMeta = {
  title: "Sem desperdício",
  description:
    "Aproveite tudo que está na sua geladeira e evite o desperdício de alimentos.",
  animation: "fridge",
};

const page3: OnboardingPageItemWithoutMeta = {
  title: "Vamos cozinhar?",
  description:
    "Explore centenas de receitas personalizadas e comece sua jornada na cozinha.",

  animation: "floatingCards",
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3].map(
  (page, index, array) => ({
    ...page,
    index,
    total: array.length,
    isLast: index === array.length - 1,
  }),
);
