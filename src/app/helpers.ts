export interface Permission {
  edit: boolean;
  delete: boolean;
  create: boolean;
}

export interface UserPermissions {
  category: Permission;
  product: Permission;
  showCart: boolean;
}

export interface ApplicationContextValues {}

export const applicationContextInitialValue: ApplicationContextValues = {};

export interface ApplicationProviderProps {}
