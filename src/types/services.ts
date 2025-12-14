export interface Service {
  title: string;
  price: string;
  icon: string; // if you have an icon map, you could type this as keyof typeof servicesIconMap
}

export type ServiceHeading = {
  servicePrimaryHeading: string;
  serviceSubHeading: string;
};
