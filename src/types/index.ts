export type UserType = {
  name: string;
  password: string;
  avatar: string;
};

export type PokeResponseType = {
  name: string;
  url: string;
};

export type PokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprities: {
    front_default: string;
    back_default: string;
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
};
