export const pageview = (url: string) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
