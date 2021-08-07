type userName = {
  first: string;
  last: string;
};

type userPhotos = {
  large: string;
  small: string;
};

export interface User {
  name: userName;
  age: number;
  email: string;
  picture: userPhotos;
}
