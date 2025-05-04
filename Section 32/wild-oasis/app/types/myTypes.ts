export type User = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};
