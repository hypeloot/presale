export type User = {
  id: number;
  profile_id: string;
  name: string;
  avatar_url: string;
  balance: number;
  email: string | null;
  email_verified_at: string | null;
  shipping_address: ShippingAddress | null;
  created_at: string;
  user_level: {
    from: number;
    to: number;
    level: number;
    value: number;
  };
};

export type ShippingAddress = {
  id?: number;
  user_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  country_state: string;
  city: string;
  postal_code: string;
  street_address: string;
  street_address_2: string;
  shoe_size?: string;
  apparel_size?: string;
};
